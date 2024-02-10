import { Box, Text } from '@chakra-ui/react';
import { boxStyles } from '../globalStyles';

function Footer() {
  return (
    <Box sx={boxStyles}>
      <Text color="gray.400">This is a footer</Text>
    </Box>
  );
}

export default Footer;
