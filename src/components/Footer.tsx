import { Box, Center, Text } from '@chakra-ui/react';
import { boxStyle } from '../globalStyles';

function Footer() {
  return (
    <Box sx={boxStyle}>
      <Center>
        <Text color="gray.400">Start-the-day - Avspyros &copy; {new Date().getFullYear()}</Text>
      </Center>
    </Box>
  );
}

export default Footer;
