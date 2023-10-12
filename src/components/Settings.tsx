import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, IconButton, Button, Flex, FormControl, FormLabel, HStack, Switch, Text, useDisclosure } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

interface WidgetVisibility {
  hideWeatherWidget: boolean;
  hideQuoteWidget: boolean;
  hideTaskWidget: boolean;
}

interface SettingsProps {
  widgetVisibility: WidgetVisibility;
  toggleWidgetVisibility: (widgetName: keyof WidgetVisibility) => void;
}

function Settings({ widgetVisibility, toggleWidgetVisibility }: SettingsProps) {
  const { hideWeatherWidget, hideQuoteWidget, hideTaskWidget } = widgetVisibility;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton pos="absolute" top="1rem" right="1rem" isRound={true} variant="solid" colorScheme="orange" aria-label="Done" fontSize="20px" icon={<SettingsIcon />} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="teal.400">
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Flex justify="space-between">
                <FormLabel mb="0" htmlFor="show-weather-widget">
                  Weather Widget:
                </FormLabel>
                <HStack>
                  <Switch colorScheme="orange" id="show-weather-widget" isChecked={hideWeatherWidget} onChange={() => toggleWidgetVisibility('hideWeatherWidget')} />
                  <Text fontSize="sm">Show/Hide</Text>
                </HStack>
              </Flex>
              <Flex justify="space-between">
                <FormLabel mb="0" htmlFor="show-quote-widget">
                  Quote Widget:
                </FormLabel>
                <HStack>
                  <Switch colorScheme="orange" id="show-quote-widget" isChecked={hideQuoteWidget} onChange={() => toggleWidgetVisibility('hideQuoteWidget')} />
                  <Text fontSize="sm">Show/Hide</Text>
                </HStack>
              </Flex>
              <Flex justify="space-between">
                <FormLabel mb="0" htmlFor="show-task-widget">
                  Task Widget:
                </FormLabel>
                <HStack>
                  <Switch colorScheme="orange" id="show-task-widget" isChecked={hideTaskWidget} onChange={() => toggleWidgetVisibility('hideTaskWidget')} />
                  <Text fontSize="sm">Show/Hide</Text>
                </HStack>
              </Flex>
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
