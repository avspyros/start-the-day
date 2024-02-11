import { useState, FormEvent } from 'react';
import { Box, HStack, Text, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

interface bgProps {
  id: string;
  inputLabel: string;
  onSubmit: (url: string) => void;
}

function BgSetting({ id, inputLabel, onSubmit }: bgProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const isURLValid = (input: string): boolean => {
    const urlRegex = /^(https):\/\/[^ "]+$/;
    return urlRegex.test(input);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isURLValid(url) || url === '') {
      onSubmit(url);
      setUrl('');
      setError('');
    } else {
      setError('Invalid URL');
      console.error('Invalid or empty URL');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack align="end">
        <FormControl>
          <FormLabel mb="2" htmlFor={id}>
            {inputLabel}:
          </FormLabel>
          <Input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            name="bgInput"
            placeholder="Leave empty for default image"
            size="sm"
            rounded="md"
            focusBorderColor="orange.500"
          />
        </FormControl>
        <Button size="sm" fontSize="0.8rem" type="submit">
          Set BG
        </Button>
      </HStack>
      <Box mt={1}>
        {!error ? (
          <Text fontSize="0.8rem">Enter image URL from Unsplash, Pexels, etc.</Text>
        ) : (
          <Text fontSize="0.8rem" color="red.600">
            Invalid image URL
          </Text>
        )}
      </Box>
    </form>
  );
}

export default BgSetting;
