import { Box } from '@chakra-ui/react';
import { boxStyles } from '../globalStyles';
import DateTime from './components/DateTime';
import Weather from './components/Weather';

function WeatherWidget() {
  return (
    <Box sx={boxStyles} mb="2rem" w={{ base: '100%', md: '360px' }} maxH="140px">
      <DateTime />
      <Weather />
    </Box>
  );
}

export default WeatherWidget;
