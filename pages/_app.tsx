import '@mantine/core/styles.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Navbar from '../components/Navbar';
import { Container } from '@mantine/core';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Container fluid>
      <Head>
        <title>Frenchmen Art Bazaar</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
      </Container>
    </MantineProvider>
  );
}
