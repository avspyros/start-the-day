import { Box } from '@chakra-ui/react';

interface WrapperProps {
  children: React.ReactNode;
  bgImg: string;
}

function Wrapper({ children, bgImg }: WrapperProps) {
  return (
    <Box
      bg="blue.500"
      minH="100vh"
      maxW="2560"
      m="auto"
      p="1rem"
      bgImage={`url(${bgImg})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {children}
    </Box>
  );
}

export default Wrapper;
