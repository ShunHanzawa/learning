import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box } from '@mui/material';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
