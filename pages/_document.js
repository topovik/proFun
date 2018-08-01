import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}