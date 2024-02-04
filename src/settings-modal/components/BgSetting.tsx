import { useState, FormEvent } from 'react';
import { FormControl, FormLabel, Input, Button, HStack } from '@chakra-ui/react';

interface bgProps {
  id: string;
  inputLabel: string;
  onSubmit: (url: string) => void;
}

function BgSetting({ id, inputLabel, onSubmit }: bgProps) {
  const [url, setUrl] = useState('');

  const isURLValid = (input: string): boolean => {
    const urlRegex = /^(https):\/\/[^ "]+$/;
    return urlRegex.test(input);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (url.trim() !== '' && isURLValid(url)) {
      onSubmit(url);
      setUrl('');
    } else {
      // Handle invalid or empty URL
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
            placeholder="add image url"
            size="sm"
            rounded="md"
            focusBorderColor="orange.500"
          />
        </FormControl>
        <Button size="sm" fontSize="0.8rem" type="submit">
          Set BG
        </Button>
      </HStack>
    </form>
  );
}

export default BgSetting;
