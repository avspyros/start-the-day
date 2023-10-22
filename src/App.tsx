import { Flex, Center } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper';
import Settings from './settings-modal/Settings';
import WeatherWidget from './weather-widget/WeatherWidget';
import QuotesWidget from './quotes-widget/QuotesWidget';
import TaskWidget from './task-widget/TaskWidget';

interface WidgetVisibility {
  weather: boolean;
  quote: boolean;
  tasks: boolean;
  [key: string]: boolean;
}

const initialWidgetVisibility: WidgetVisibility = JSON.parse(
  localStorage.getItem('widgetVisibility') || '{"weather": false, "quote": false, "tasks": false}'
);

export default function App() {
  const [widgetVisibility, setWidgetVisibility] = useState<WidgetVisibility>(initialWidgetVisibility);

  const handleVisibility = (widgetId: string) => {
    setWidgetVisibility(widgetVisibility => ({
      ...widgetVisibility,
      [widgetId]: !widgetVisibility[widgetId]
    }));
  };

  useEffect(() => {
    localStorage.setItem('widgetVisibility', JSON.stringify(widgetVisibility));
  }, [widgetVisibility]);

  return (
    <Wrapper>
      <Settings widgetVisibility={widgetVisibility} handleVisibility={handleVisibility} />
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
        {!widgetVisibility.quote && <QuotesWidget />}

        {!widgetVisibility.weather && <WeatherWidget />}
      </Flex>

      <Center h={{ md: '40vh' }}>{!widgetVisibility.tasks && <TaskWidget />}</Center>
    </Wrapper>
  );
}
