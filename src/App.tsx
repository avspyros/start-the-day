import { useState } from 'react';
import Wrapper from './components/Wrapper';
import Spacer from './components/Spacer';
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

export default function App() {
  const [hideWidget, setHideWidget] = useState<WidgetVisibility>({
    weather: false,
    quote: false,
    tasks: false
  });

  const handleVisibility = (widgetId: string) => {
    setHideWidget(hideWidget => ({
      ...hideWidget,
      [widgetId]: !hideWidget[widgetId]
    }));
  };

  return (
    <Wrapper>
      <Settings handleVisibility={handleVisibility} />
      <Spacer />
      {!hideWidget.weather && <WeatherWidget />}
      <Spacer />
      {!hideWidget.quote && <QuotesWidget />}
      <Spacer />
      {!hideWidget.tasks && <TaskWidget />}
      <Spacer />
    </Wrapper>
  );
}

// import { useState, useEffect } from 'react';
// import Wrapper from './components/Wrapper';
// import Spacer from './components/Spacer';
// import Settings from './components/Settings';
// import WeatherWidget from './weather-widget/WeatherWidget';
// import QuotesWidget from './quotes-widget/QuotesWidget';
// import TaskWidget from './task-widget/TaskWidget';

// interface WidgetVisibility {
//   hideWeatherWidget: boolean;
//   hideQuoteWidget: boolean;
//   hideTaskWidget: boolean;
// }

// // Load the initial widget visibility state from local storage, or set defaults
// const initialWidgetVisibility: WidgetVisibility = JSON.parse(localStorage.getItem('widgetVisibility') || '{"hideWeatherWidget": false, "hideQuoteWidget": false, "hideTaskWidget": false}');

// export default function App() {
//   const [widgetVisibility, setWidgetVisibility] = useState<WidgetVisibility>(initialWidgetVisibility);

//   const toggleWidgetVisibility = (widgetName: keyof WidgetVisibility) => {
//     setWidgetVisibility(prevState => ({
//       ...prevState,
//       [widgetName]: !prevState[widgetName]
//     }));
//   };

//   // Use useEffect to save the widget visibility state to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('widgetVisibility', JSON.stringify(widgetVisibility));
//   }, [widgetVisibility]);

//   return (
//     <Wrapper>
//       <Settings widgetVisibility={widgetVisibility} toggleWidgetVisibility={toggleWidgetVisibility} />
//       <Spacer />
//       {!widgetVisibility.hideWeatherWidget && <WeatherWidget />}
//       <Spacer />
//       {!widgetVisibility.hideQuoteWidget && <QuotesWidget />}
//       <Spacer />
//       {!widgetVisibility.hideTaskWidget && <TaskWidget />}
//       <Spacer />
//     </Wrapper>
//   );
// }
