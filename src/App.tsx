import Wrapper from './components/Wrapper';
import Spacer from './components/Spacer';
// import TaskWidget from './task-widget/TaskWidget';
import QuotesWidget from './quotes-widget/QuotesWidget';

export default function App() {
  return (
    <Wrapper>
      <Spacer />
      <QuotesWidget />
      <Spacer />
      {/* <TaskWidget /> */}
    </Wrapper>
  );
}
