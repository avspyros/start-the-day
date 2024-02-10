import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Text, IconButton, Spinner, Tooltip } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { boxStyles } from '../globalStyles';

function QuotesWidget() {
  const [quoteResult, setQuoteResult] = useState({ quote: '', source: '' });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const generateQuote = useCallback(() => {
    const controller = new AbortController();
    setLoading(true);
    setQuoteResult({ quote: '', source: '' });
    axios
      .get('https://philosophy-quotes-api.glitch.me/quotes', { signal: controller.signal })
      .then(res => {
        const quotesArr = res.data;
        const randomQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];
        setQuoteResult(randomQuote);
        setError('');
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setQuoteResult({ quote: '', source: '' });
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    generateQuote();
  }, [generateQuote]);

  return (
    <Box sx={boxStyles}>
      <Flex justify="space-between">
        <Heading as="h3" fontSize="lg" mb="1rem">
          Quote of the day
        </Heading>
        <Tooltip label="Random Quote" aria-label="A tooltip" borderRadius="8px" placement="left-start" openDelay={800}>
          <IconButton
            icon={<RepeatIcon />}
            aria-label="Generate Quote"
            colorScheme="orange"
            size="xs"
            onClick={generateQuote}
          />
        </Tooltip>
      </Flex>
      {error && (
        <Text fontSize="lg" color="red.400">
          {error}
        </Text>
      )}
      {loading && <Spinner color="orange.400" />}
      {quoteResult.quote && (
        <>
          <Text as="cite" fontSize={{ base: '0.9rem', md: '1rem' }} color="orange.400">
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
