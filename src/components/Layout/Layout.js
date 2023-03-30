import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Container maxWidth="600" minHeight="700" margin='0 auto' padding='0 16px' backgroundColor='#d2f1d7'>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  )
};
