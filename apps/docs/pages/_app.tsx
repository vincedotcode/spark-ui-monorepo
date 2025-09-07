import type { AppProps } from 'next/app';
import 'spark-ui/dist/tokens/tokens.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;