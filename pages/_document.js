import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon1.ico" />

        {/* Google Fonts: Anta & Space Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Anta:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
        <link hreg="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel='stylesheet' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
