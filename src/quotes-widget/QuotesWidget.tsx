import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { boxStyles } from '../globalStyles';

function QuotesWidget() {
  const [quoteResult, setQuoteResult] = useState<{ quote: string; source: string }>({
    quote: '',
    source: ''
  });
  const [error, setError] = useState<string>('');

  const url = 'https://philosophy-quotes-api.glitch.me/quotes';

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        let randomQuoteIndex = Math.floor(Math.random() * res.data.length);
        let randomQuote = res.data[randomQuoteIndex];
        // console.log(randomQuote);
        setQuoteResult(randomQuote);
      })
      .catch(err => setError(err.message));
  }, []);

  return (
    <Box sx={boxStyles}>
      <Heading as="h3" fontSize="xl" mb="1rem">
        Quote of the day
      </Heading>
      {error && (
        <Text fontSize="lg" color="red.500">
          {error}
        </Text>
      )}
      {quoteResult && (
        <>
          <Text fontSize="lg" as="i" color="orange.400">
            {quoteResult.quote}
          </Text>
          <Flex mt="1rem;" justify="end">
            <Text color="gray.400">{quoteResult.source}</Text>
          </Flex>
        </>
      )}
    </Box>
  );
}

export default QuotesWidget;
