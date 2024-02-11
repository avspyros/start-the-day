import { SettingsIcon } from '@chakra-ui/icons';
import SwitchSetting from './components/SwitchSetting';
import BgSetting from './components/BgSetting';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  IconButton,
  Button,
  FormControl,
  useDisclosure
} from '@chakra-ui/react';

interface WidgetVisibility {
  weather: boolean;
  quote: boolean;
  tasks: boolean;
}

interface SettingProps {
  widgetVisibility: WidgetVisibility;
  handleVisibility: (widgetId: string) => void;
  handleSubmit: (url: string) => void;
}

function Settings({ handleVisibility, widgetVisibility, handleSubmit }: SettingProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center pt="0.5rem">
        <IconButton
          pos="absolute"
          isRound={true}
          variant="solid"
          bg="blackAlpha.600"
          color="white"
          _hover={{ color: 'orange' }}
          aria-label="Settings"
          fontSize="1rem"
          icon={<SettingsIcon />}
          onClick={onOpen}
        />
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="blue.300">
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <SwitchSetting
                id="weather_widget"
                switchLabel="Weather Widget"
                checked={widgetVisibility.weather}
                onChange={() => handleVisibility('weather')}
              />
              <SwitchSetting
                id="quote_widget"
                switchLabel="Quote Widget"
                checked={widgetVisibility.quote}
                onChange={() => handleVisibility('quote')}
              />
              <SwitchSetting
                id="task_widget"
                switchLabel="Task Widget"
                checked={widgetVisibility.tasks}
                onChange={() => handleVisibility('tasks')}
              />
              <BgSetting id="set-bg" inputLabel="Background Image" onSubmit={handleSubmit} />
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
