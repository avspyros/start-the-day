import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Text, IconButton } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { boxStyles } from '../globalStyles';

function QuotesWidget() {
  const [quoteResult, setQuoteResult] = useState<{ quote: string; source: string }>({
    quote: '',
    source: ''
  });
  const [error, setError] = useState<string>('');

  const generateQuote = () => {
    const controller = new AbortController();
    axios
      .get('https://philosophy-quotes-api.glitch.me/quotes', { signal: controller.signal })
      .then(res => {
        let randomQuoteIndex = Math.floor(Math.random() * res.data.length);
        let randomQuote = res.data[randomQuoteIndex];
        // console.log(randomQuote);
        setError('');
        setQuoteResult(randomQuote);
      })
      .catch(err => {
        setQuoteResult({ quote: '', source: '' });
        setError(err.message);
      });

    return () => controller.abort();
  };

  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <Box sx={boxStyles}>
      <Flex justify="space-between">
        <Heading as="h3" fontSize="xl" mb="1rem">
          Quote of the day
        </Heading>
        <IconButton icon={<RepeatIcon />} aria-label="Generate Quote" colorScheme="orange" size="xs" onClick={() => generateQuote()} />
      </Flex>

      {error && (
        <Text fontSize="lg" color="red.500">
          {error}
        </Text>
      )}

      <Text as="cite" color="orange.400">
        {quoteResult && `"${quoteResult.quote}"`}
      </Text>
      <Flex mt="1rem;" justify="end">
        <Text color="gray.400">{quoteResult.source}</Text>
      </Flex>
    </Box>
  );
}

export default QuotesWidget;
