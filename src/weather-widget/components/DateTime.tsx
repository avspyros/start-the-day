import { useState, useEffect } from 'react';
import { Box, Flex, Badge } from '@chakra-ui/react';

function DateTime() {
  const [dateTime, setDateTime] = useState({ date: '', time: '' });

  useEffect(() => {
    const getDateTime = () => {
      const current = new Date();
      const currentDate = current.toDateString();
      const currentTime = current.toLocaleTimeString();

      setDateTime({ date: currentDate, time: currentTime });
    };

    getDateTime();

    const intervalId = setInterval(getDateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box mb="4">
      <Flex justify="space-between" align="center">
        <Badge bg="orange.400" color="gray.700" borderRadius="4px" p=".1rem .4rem" fontSize=".9rem">
          {dateTime.date}
        </Badge>
        <Badge bg="orange.400" color="gray.700" borderRadius="4px" p=".1rem .4rem" fontSize=".9rem">
          {dateTime.time}
        </Badge>
      </Flex>
    </Box>
  );
}

export default DateTime;
