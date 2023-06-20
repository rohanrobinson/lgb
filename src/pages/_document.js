import { Html, Head, Main, NextScript } from 'next/document'
import { Rubik_Mono_One } from 'next/font/google'

export default function Document() {
  return (
    <Html lang="en">
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" true/>
              <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet"/>
          </Head>

          <body>
         <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
