import { Flex, FormLabel, HStack, Switch, Text } from '@chakra-ui/react';

interface SwitchProps {
  id: string;
  switchLabel: string;
  checked: boolean;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

function SwitchSetting({ id, switchLabel, onChange, checked }: SwitchProps) {
  return (
    <Flex justify="space-between" mb="1rem">
      <FormLabel mb="0" htmlFor={id}>
        {switchLabel}:
      </FormLabel>
      <HStack>
        <Switch htmlFor={id} colorScheme="orange" id={id} isChecked={checked} onChange={onChange} />
        <Text fontSize="sm">Show/Hide</Text>
      </HStack>
    </Flex>
  );
}

export default SwitchSetting;
