import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Text } from '@chakra-ui/react';

const weatherUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=37.9838&longitude=23.7278&current=temperature_2m,weathercode';

// interface weatherDisplay {
//   currentTemp: number;
//   currentDescription: string;
// }

function Weather() {
  const [currentWeather, setCurrentWeather] = useState<number>();
  const [error, setError] = useState<string>('');

  const fetchWeather = () => {
    axios
      .get(weatherUrl)
      .then(res => {
        const temperature = Math.round(res.data.current.temperature_2m);
        setCurrentWeather(temperature);
      })
      .catch(err => setError(err.message));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <Box>
      {error && (
        <Text fontSize="lg" color="red.500">
          {error}
        </Text>
      )}
      {currentWeather && (
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
          {currentWeather} &#8451;
        </Text>
      )}
    </Box>
  );
}

export default Weather;
