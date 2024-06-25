import { Inter } from "next/font/google";
import type { AppProps } from 'next/app';
import "@app/styles/globals.css";
 
const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
  
}

export default App;
