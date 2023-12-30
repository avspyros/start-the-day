import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Text, IconButton, Spinner, Tooltip } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { boxStyles } from '../globalStyles';

function QuotesWidget() {
  const [quoteResult, setQuoteResult] = useState<{ quote: string; source: string }>({
    quote: '',
    source: ''
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  let quotesArr = [];

  const generateQuote = () => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get('https://philosophy-quotes-api.glitch.me/quotes', { signal: controller.signal })
      .then(res => {
        quotesArr = res.data;
        // console.log(quotesArr);
        let randomQuoteIndex = Math.floor(Math.random() * quotesArr.length);
        let randomQuote = quotesArr[randomQuoteIndex];
        // console.log(randomQuote);
        setError('');
        setQuoteResult(randomQuote);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setQuoteResult({ quote: '', source: '' });
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  };

  useEffect(() => {
    generateQuote();
  }, []);

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
            onClick={() => generateQuote()}
          />
        </Tooltip>
      </Flex>

      {error && (
        <Text fontSize="lg" color="red.500">
          {error}
        </Text>
      )}
      {loading && <Spinner color="orange.400" />}
      {quoteResult && (
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
