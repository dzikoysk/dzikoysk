import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content='#000000' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@700&family=Inconsolata&family=Lato:wght@300;400&family=Livvic:wght@900&family=Montserrat:wght@300&family=Roboto+Mono&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/paw.png" />
        <meta http-equiv="Content-Language" content="en" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
