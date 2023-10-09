import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Text } from '@chakra-ui/react';

const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=37.9838&longitude=23.7278&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&forecast_days=3';

function Weather() {
  const [currentWeather, setCurrentWeather] = useState<string>('');
  const [error, setError] = useState<string>('');

  const fetchWeather = () => {
    axios
      .get(weatherUrl)
      .then(res => setCurrentWeather(res.data.current_weather.temperature))
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
      {currentWeather && <Text fontSize="2xl">{currentWeather}</Text>}
    </Box>
  );
}

export default Weather;
