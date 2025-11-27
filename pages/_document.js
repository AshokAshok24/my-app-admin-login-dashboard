import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (

    <Html lang="en">

      <Head>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />

        <link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
        
      </Head>

      <body className="antialiased">

        <Main />

        <NextScript />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"> </script>

      </body>

    </Html>
  );
}
