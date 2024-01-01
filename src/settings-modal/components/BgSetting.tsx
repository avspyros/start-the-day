import { useState, FormEvent } from 'react';
import { Input, FormLabel, Button } from '@chakra-ui/react';

interface bgProps {
  id: string;
  inputLabel: string;
  onSubmit: (url: string) => void;
}

function BgSetting({ id, inputLabel, onSubmit }: bgProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel mb="2" htmlFor={id}>
        {inputLabel}:
      </FormLabel>
      <Input
        mb="2"
        mr={2}
        name="bgInput"
        focusBorderColor="orange.500"
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <Button fontSize={{ base: '0.8rem', md: '0.8rem' }} mb={4} type="submit">
        Set BG
      </Button>
    </form>
  );
}

export default BgSetting;
