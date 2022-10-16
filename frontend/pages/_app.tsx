import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <ThemeProvider attribute="class" enableSystem={false} enableColorScheme={false}>

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
