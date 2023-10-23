import { useState, useEffect } from 'react';
import moment from 'moment';
import { Box, Flex, Badge, Heading } from '@chakra-ui/react';

function DateTime() {
  const [localDateTime, setLocalDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const currentDateTime = moment();
      const formattedDateTime = currentDateTime.format('MMMM Do YYYY, h:mm:ss a');
      setLocalDateTime(formattedDateTime);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box mb=".5rem">
      <Flex justify="space-between" align="center">
        <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }}>
          Athens
        </Heading>
        <Badge bg="orange.300" color="gray.700" borderRadius="8px" p=".2rem .4rem" fontSize=".75rem">
          {localDateTime}
        </Badge>
      </Flex>
    </Box>
  );
}

export default DateTime;
