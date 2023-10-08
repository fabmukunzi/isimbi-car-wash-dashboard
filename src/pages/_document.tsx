import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="K Car wash" content="K car wash" />
        <meta
          name="description"
          content="Book Now And Get A Wash In 30 Mins
"
        />
        <link rel="shortcut icon" href="/icon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kcarwash.com" />
        <meta property="og:title" content="Sinc Today" />
        <meta
          property="og:description"
          content="Book Now And Get A Wash In 30 Mins"
        />
        <meta property="og:image" content="../../publi/favicon.ico" />

        <meta property="twitter:card" content="Sinc Today" />
        <meta property="twitter:url" content="https://sinc.today/" />
        <meta property="twitter:title" content="Sinc Today" />
        <meta
          property="twitter:description"
          content="Book Now And Get A Wash In 30 Mins"
        />
        <meta property="twitter:image" content="../../publi/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};

export default MyDocument;
