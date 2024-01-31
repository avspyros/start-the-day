import { Grid, GridItem } from '@chakra-ui/react';
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

// Fetch widget visibility status from local storage
const initialWidgetVisibility: WidgetVisibility = JSON.parse(
  localStorage.getItem('widgetVisibility') || '{"weather": false, "quote": false, "tasks": false}'
);

export default function App() {
  const [widgetVisibility, setWidgetVisibility] = useState<WidgetVisibility>(initialWidgetVisibility);
  const [bgImg, setBgImg] = useState(
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
  );

  const handleVisibility = (widgetId: string) => {
    setWidgetVisibility(widgetVisibility => ({
      ...widgetVisibility,
      [widgetId]: !widgetVisibility[widgetId]
    }));
  };

  useEffect(() => {
    // Update widget visibility status in local storage
    localStorage.setItem('widgetVisibility', JSON.stringify(widgetVisibility));
  }, [widgetVisibility]);

  return (
    <Wrapper bgImg={bgImg}>
      <Settings
        widgetVisibility={widgetVisibility}
        handleVisibility={handleVisibility}
        handleSubmit={url => setBgImg(url)}
      />
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="repeat(6, 1fr)"
        gap="6"
        sx={{ height: 'calc(100vh - 3rem)' }}
      >
        <GridItem colStart={{ base: 1 }} colSpan={{ base: 12, md: 5, lg: 4 }}>
          {!widgetVisibility.quote && <QuotesWidget />}
        </GridItem>
        <GridItem colStart={{ base: 1, md: 8, lg: 9 }} colSpan={{ base: 12, md: 6, lg: 5 }}>
          {!widgetVisibility.weather && <WeatherWidget />}
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 3, lg: 4, xl: 5 }}
          colSpan={{ base: 12, md: 8, lg: 6, xl: 4 }}
          rowStart={{ base: 3 }}
          rowSpan={{ base: 2 }}
        >
          {!widgetVisibility.tasks && <TaskWidget />}
        </GridItem>
      </Grid>
    </Wrapper>
  );
}
