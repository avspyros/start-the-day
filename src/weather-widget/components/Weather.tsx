import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../../services';
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
  const [currentWeather, setCurrentWeather] = useState<weatherDisplay | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(weatherUrl);
        const weather = response.data;
        // console.log(weather);

        const weatherData = {
          temperature: Math.round(weather.main.temp),
          min: Math.round(weather.main.temp_min),
          max: Math.round(weather.main.temp_max),
          description: weather.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
        };
        setError('');
        setCurrentWeather(weatherData);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error('Axios Error fetching data', err.message);
          setCurrentWeather(null);
          setError(err.message);
        } else {
          console.error('Something went wrong!');
          setError('Something went wrong!');
        }
      }
    };
    fetchWeather();
  }, []);

  const { temperature, min, max, description, icon } = currentWeather || {};

  return (
    <Box>
      {error && (
        <Text fontSize="lg" color="red.400">
          {error}
        </Text>
      )}
      {currentWeather && (
        <HStack justify="space-evenly" bg="blue.400" borderRadius="4px" px="0.5rem">
          <Heading as="h3" fontSize={{ base: 'sm', md: 'md' }} fontWeight="500">
            ATHENS
          </Heading>

          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="500">
            {temperature}{' '}
            <Text as="span" fontWeight="400">
              &#8451;
            </Text>
          </Text>
          <VStack gap="0">
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="yellow.200">
              {max}
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="blue.800">
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
