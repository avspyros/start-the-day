import { useState, useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useLocalStorage } from './useLocalStorage';
import Wrapper from './components/Wrapper';
import Settings from './settings-modal/Settings';
import WeatherWidget from './weather-widget/WeatherWidget';
import QuotesWidget from './quotes-widget/QuotesWidget';
import TaskWidget from './task-widget/TaskWidget';

const defaultImageUrl =
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';

interface WidgetVisibility {
  weather: boolean;
  quote: boolean;
  tasks: boolean;
  [key: string]: boolean;
}

export default function App() {
  const { setItem, getItem } = useLocalStorage('BG');
  const [bgImg, setBgImg] = useState(defaultImageUrl);

  const { getItem: getWidgetStatus, setItem: setWidgetStatus } = useLocalStorage('widgetVisibility');
  const [widgetVisibility, setWidgetVisibility] = useState<WidgetVisibility>(
    () =>
      getWidgetStatus() || {
        weather: false,
        quote: false,
        tasks: false
      }
  );

  // SIDE EFFECTS

  useEffect(() => {
    const storedBgImg = getItem();
    setBgImg(storedBgImg || defaultImageUrl);
  }, [getItem]);

  useEffect(() => {
    setWidgetStatus(widgetVisibility);
  }, [widgetVisibility, setWidgetStatus]);

  // HANDLING

  const handleVisibility = (widgetId: string) => {
    setWidgetVisibility(prev => ({
      ...prev,
      [widgetId]: !prev[widgetId]
    }));
  };

  const handleBgChange = (url: string) => {
    setBgImg(url);
    setItem(url);
  };

  return (
    <Wrapper bgImg={bgImg}>
      <Settings widgetVisibility={widgetVisibility} handleVisibility={handleVisibility} handleSubmit={handleBgChange} />
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="repeat(6, 1fr)"
        gap="6"
        sx={{ height: 'calc(100vh - 3rem)' }}
      >
        <GridItem colStart={{ base: 1 }} colSpan={{ base: 12, md: 5, lg: 4, xl: 3 }}>
          {!widgetVisibility.quote && <QuotesWidget />}
        </GridItem>
        <GridItem colStart={{ base: 1, md: 8, lg: 9, xl: 10 }} colSpan={{ base: 12, md: 6, lg: 4 }}>
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
