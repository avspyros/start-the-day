import { Box } from '@chakra-ui/react';
import { boxStyles } from '../globalStyles';
import DateTime from './DateTime';
import Weather from './Weather';

function WeatherWidget() {
  return (
    <Box sx={boxStyles}>
      <DateTime />
      <Weather />
    </Box>
  );
}

export default WeatherWidget;
