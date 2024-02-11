import { Box, Center, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="blackAlpha.600" boxShadow="0 0 6px 2px rgba(244, 208, 63, 0.3)" borderRadius="8px" w="100%" p="2">
      <Center w="100%">
        <Text color="gray.400">Avspyros &copy; {new Date().getFullYear()}</Text>
      </Center>
    </Box>
  );
}

export default Footer;
