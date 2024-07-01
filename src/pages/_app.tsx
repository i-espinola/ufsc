import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, tokens } from '@app/styles/theme';
import type { AppProps } from 'next/app';

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={inter.className}>
      <ThemeProvider theme={tokens}>
        <GlobalStyle theme={tokens} />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
