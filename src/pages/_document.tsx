import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(){
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="/nekuro-favicon.png"></link>
      </Head>
      <body className="bg-black-700 bg-app bg-no-repeat bg-bottom bg-cover">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}