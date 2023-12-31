import { Box } from '@chakra-ui/react';

const bgImg =
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';

interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <Box
      bg="blue.500"
      minH="100vh"
      p="1rem"
      bgImage={`url(${bgImg})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {children}
    </Box>
  );
}

export default Wrapper;

// bgImage={`url(${bgImg})`} backgroundPosition="center" backgroundRepeat="no-repeat"
