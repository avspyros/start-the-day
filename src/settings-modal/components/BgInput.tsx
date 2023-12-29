import { Input, FormLabel, Button } from '@chakra-ui/react';

interface bgProps {
  id: string;
  inputLabel: string;
}

function BgInput({ id, inputLabel }: bgProps) {
  return (
    <form>
      <FormLabel mb="2" htmlFor={id}>
        {inputLabel}:
      </FormLabel>

      <Input mb="2" mr={2} name="bgInput" focusBorderColor="orange.500" />
      <Button fontSize={{ base: '0.8rem', md: '0.8rem' }} type="submit" mb={4}>
        Set BG
      </Button>
    </form>
  );
}

export default BgInput;
