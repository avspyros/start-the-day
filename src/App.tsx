import Wrapper from './components/Wrapper';
import Spacer from './components/Spacer';
import WeatherWidget from './weather-widget/WeatherWidget';
import QuotesWidget from './quotes-widget/QuotesWidget';
import TaskWidget from './task-widget/TaskWidget';

export default function App() {
  return (
    <Wrapper>
      <Spacer />
      <WeatherWidget />
      <Spacer />
      {/* <QuotesWidget />
      <Spacer />
      <TaskWidget /> */}
    </Wrapper>
  );
}
