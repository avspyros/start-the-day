import { Container, Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

const bgImg = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';

function Wrapper({ children }: Props) {
  return (
    <Box bgImage={`url(${bgImg})`} backgroundPosition="center" backgroundRepeat="no-repeat">
      <Container>{children}</Container>
    </Box>
  );
}

export default Wrapper;
