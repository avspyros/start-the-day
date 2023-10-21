import { SettingsIcon } from '@chakra-ui/icons';
import SwitchSetting from './SwitchSetting';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Button,
  FormControl,
  useDisclosure
} from '@chakra-ui/react';

interface SettingProps {
  handleVisibility: (widgetId: string) => void;
}

function Settings({ handleVisibility }: SettingProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        pos="absolute"
        top="1rem"
        right="1rem"
        isRound={true}
        variant="solid"
        colorScheme="orange"
        aria-label="Done"
        fontSize="20px"
        icon={<SettingsIcon />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="teal.400">
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <SwitchSetting
                id="weather_widget"
                switchLabel="Weather Widget"
                onChange={() => handleVisibility('weather')}
              />
              <SwitchSetting
                id="quote_widget"
                switchLabel="Quote Widget"
                onChange={() => handleVisibility('quote')}
              />
              <SwitchSetting
                id="task_widget"
                switchLabel="Task Widget"
                onChange={() => handleVisibility('tasks')}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" colorScheme="orange" onClick={onClose}>
              ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Settings;

{
  /* <Flex justify="space-between" mb="1rem">
<FormLabel mb="0" htmlFor="show-weather-widget">
  Weather Widget:
</FormLabel>
<HStack>
  <Switch colorScheme="orange" id="show-weather-widget" isChecked={hideWeatherWidget} onChange={() => toggleWidgetVisibility('hideWeatherWidget')} />
  <Text fontSize="sm">Show/Hide</Text>
</HStack>
</Flex>
<Flex justify="space-between" mb="1rem">
<FormLabel mb="0" htmlFor="show-quote-widget">
  Quote Widget:
</FormLabel>
<HStack>
  <Switch colorScheme="orange" id="show-quote-widget" isChecked={hideQuoteWidget} onChange={() => toggleWidgetVisibility('hideQuoteWidget')} />
  <Text fontSize="sm">Show/Hide</Text>
</HStack>
</Flex>
<Flex justify="space-between" mb="1rem">
<FormLabel mb="0" htmlFor="show-task-widget">
  Task Widget:
</FormLabel>
<HStack>
  <Switch colorScheme="orange" id="show-task-widget" isChecked={hideTaskWidget} onChange={() => toggleWidgetVisibility('hideTaskWidget')} />
  <Text fontSize="sm">Show/Hide</Text>
</HStack>
</Flex> */
}
