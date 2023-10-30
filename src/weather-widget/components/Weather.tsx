import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, HStack, Heading, Text } from '@chakra-ui/react';

const weatherUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=37.9838&longitude=23.7278&current=temperature_2m,weathercode';

interface weatherDisplay {
  currentTemp: number;
  currentDescription: string;
}

function Weather() {
  // const [currentWeather, setCurrentWeather] = useState<number>();
  const [currentWeather, setCurrentWeather] = useState<weatherDisplay>({
    currentTemp: 21,
    currentDescription: 'Coldy'
  });
  const [error, setError] = useState<string>('');

  const fetchWeather = () => {
    axios
      .get(weatherUrl)
      .then(res => {
        // const temperature = Math.round(res.data.current.temperature_2m);
        console.log(res.data);

        // setCurrentWeather(temperature);
      })
      .catch(err => setError(err.message));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <Box>
      <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="400" color="gray.400" mb="0.5rem">
        ATHENS
      </Heading>

      {error && (
        <Text fontSize="lg" color="red.500">
          {error}
        </Text>
      )}
      {currentWeather && (
        <HStack spacing="24px">
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
            {currentWeather.currentTemp} &#8451;
          </Text>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="400" color="gray.400">
            {currentWeather.currentDescription}
          </Text>
        </HStack>
      )}
    </Box>
  );
}

export default Weather;
