import { Box, Flex } from '@chakra-ui/react';
import { widgetStyle } from '../globalStyles';
import DateTime from './components/DateTime';
import Weather from './components/Weather';

function WeatherWidget() {
  return (
    <Box sx={widgetStyle}>
      <Flex direction="column" justify="space-between" h="100%">
        <DateTime />
        <Weather />
      </Flex>
    </Box>
  );
}

export default WeatherWidget;
