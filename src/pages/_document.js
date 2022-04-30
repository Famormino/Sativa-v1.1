import Document, {Html, Head, Main, NextScript} from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {...initialProps};
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Allan&family=Noto+Serif+Display:ital,wght@1,300&display=swap"
            rel="stylesheet"
          />
          <link
            href="//db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
