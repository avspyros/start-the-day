import { useState, FormEvent } from 'react';
import { FormControl, FormLabel, Input, Button, HStack } from '@chakra-ui/react';

interface bgProps {
  id: string;
  inputLabel: string;
  onSubmit: (url: string) => void;
}

function BgSetting({ id, inputLabel, onSubmit }: bgProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(url);
    onSubmit(url);
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
            focusBorderColor="orange.500"
          />
        </FormControl>
        <Button fontSize={{ base: '0.8rem', md: '0.8rem' }} type="submit">
          Set BG
        </Button>
      </HStack>
    </form>
  );
}

export default BgSetting;
