import { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../../services';
import axios from 'axios';
import { Box, VStack, HStack, Heading, Text, Image, Tooltip } from '@chakra-ui/react';

const weatherUrl = `${BASE_URL}/data/2.5/weather?lat=37.9838&lon=23.7278&appid=${API_KEY}&units=metric`;

interface weatherDisplay {
  temperature: number;
  description: string;
  icon: string;
  min: number;
  max: number;
}

function Weather() {
  const [currentWeather, setCurrentWeather] = useState<weatherDisplay | null>();
  const [error, setError] = useState<string>('');

  const fetchWeather = () => {
    axios
      .get(weatherUrl)
      .then(res => {
        console.log(res.data.main);
        const data = res.data;

        const weatherData = {
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max)
        };

        setCurrentWeather(weatherData);
      })
      .catch(err => setError(err.message));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const { temperature, description, icon, min, max } = currentWeather || {};

  return (
    <Box>
      {error && (
        <Text fontSize="lg" color="red.500">
          {error}
        </Text>
      )}
      {currentWeather && (
        <HStack justify="space-evenly" bg="whiteAlpha.300" borderRadius="4px" px="0.5rem">
          <Heading as="h3" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="gray.400">
            ATHENS
          </Heading>

          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="500">
            {temperature}{' '}
            <Text as="span" fontWeight="400">
              &#8451;
            </Text>
          </Text>
          <VStack gap="0">
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="yellow.300">
              {max}
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="blue.300">
              {min}
            </Text>
          </VStack>
          <Tooltip label={description} aria-label="A tooltip" borderRadius="8px" placement="bottom-end" openDelay={800}>
            <Image src={icon} />
          </Tooltip>
        </HStack>
      )}
    </Box>
  );
}

export default Weather;
