import { Flex, FormLabel, HStack, Switch, Text } from '@chakra-ui/react';

interface SwitchProps {
  id: string;
  switchLabel: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

function SwitchSetting({ id, switchLabel, onChange }: SwitchProps) {
  return (
    <Flex justify="space-between" mb="1rem">
      <FormLabel mb="0" htmlFor="show-weather-widget">
        {switchLabel}:
      </FormLabel>
      <HStack>
        <Switch colorScheme="orange" id={id} onChange={onChange} />
        <Text fontSize="sm">Show/Hide</Text>
      </HStack>
    </Flex>
  );
}

export default SwitchSetting;

// isChecked={hideWidget} onChange={() => toggleWidget('hideWeatherWidget')}
