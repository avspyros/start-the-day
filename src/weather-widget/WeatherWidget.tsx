import { Box, Flex } from '@chakra-ui/react';
import { boxStyles } from '../globalStyles';
import DateTime from './components/DateTime';
import Weather from './components/Weather';

function WeatherWidget() {
  return (
    <Box sx={boxStyles} mb="2rem" w={{ base: '100%', md: '360px' }} maxH="120px">
      <Flex direction="column" justify="space-between" h="100%">
        <DateTime />
        <Weather />
      </Flex>
    </Box>
  );
}

export default WeatherWidget;
