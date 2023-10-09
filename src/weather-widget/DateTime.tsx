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
        <Heading as="h3" fontSize="2xl">
          Athens
        </Heading>
        <Badge bg="orange.300" color="gray.700" borderRadius="8px" p=".3rem .5rem" fontSize=".9rem">
          {localDateTime}
        </Badge>
      </Flex>
    </Box>
  );
}

export default DateTime;
