import { useState, useEffect } from 'react';
import { Box, Flex, Badge } from '@chakra-ui/react';

function DateTime() {
  const [localDate, setLocalDate] = useState('');
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const getDateTime = () => {
      let current = new Date();

      let currentDate = current.toDateString();
      let currentTime = current.toLocaleTimeString();

      setLocalDate(currentDate);
      setLocalTime(currentTime);
    };

    getDateTime();

    const intervalId = setInterval(getDateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Badge bg="orange.400" color="gray.700" borderRadius="4px" p=".1rem .4rem" fontSize=".9rem">
          {localDate}
        </Badge>
        <Badge bg="orange.400" color="gray.700" borderRadius="4px" p=".1rem .4rem" fontSize=".9rem">
          {localTime}
        </Badge>
      </Flex>
    </Box>
  );
}

export default DateTime;
