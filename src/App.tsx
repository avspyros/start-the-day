import { useState } from 'react';
import Wrapper from './components/Wrapper';
import Spacer from './components/Spacer';
import Settings from './components/Settings';
import WeatherWidget from './weather-widget/WeatherWidget';
import QuotesWidget from './quotes-widget/QuotesWidget';
import TaskWidget from './task-widget/TaskWidget';

interface WidgetVisibility {
  hideWeatherWidget: boolean;
  hideQuoteWidget: boolean;
  hideTaskWidget: boolean;
}

export default function App() {
  const [widgetVisibility, setWidgetVisibility] = useState<WidgetVisibility>({
    hideWeatherWidget: false,
    hideQuoteWidget: false,
    hideTaskWidget: false
  });

  const toggleWidgetVisibility = (widgetName: keyof WidgetVisibility) => {
    setWidgetVisibility(prevState => ({
      ...prevState,
      [widgetName]: !prevState[widgetName]
    }));
  };

  return (
    <Wrapper>
      <Settings widgetVisibility={widgetVisibility} toggleWidgetVisibility={toggleWidgetVisibility} />
      <Spacer />
      {!widgetVisibility.hideWeatherWidget && <WeatherWidget />}
      <Spacer />
      {!widgetVisibility.hideQuoteWidget && <QuotesWidget />}
      <Spacer />
      {!widgetVisibility.hideTaskWidget && <TaskWidget />}
      <Spacer />
    </Wrapper>
  );
}
