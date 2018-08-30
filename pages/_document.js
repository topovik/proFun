import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    const GA_TRACKING_ID = 'UA-124910376-1';
    return (
      <html>
        <head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
            <script dangerouslySetInnerHTML={{ __html: 
              `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
              `}}
            />
          <title>proFun.app</title>
          <meta charSet="utf-8"/>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8"/>
          <link rel="icon" type="image/x-icon" href="/static/weather/favicon.ico" />
          <meta name="description" content="proFun.app - лучшие статьи, подборки, угарные треши со всей сети! Есть что посмотреть, почитать и поугарать. Наша задача - Ваше веселое времяпровождение"/>
          <meta name="keywords" content="Лучшее в сети, свежие новости, лучшие подборки, лучшие топы, новые фильмы, лучшая музыка, бизнес, новые игры, it, финансы"/>
          <meta property="og:title" content="proFun.app - самое интересное и свежее из сети!"/>
          <meta property="og:description" content="Ресурс, который поможет с пользой провести время, узнать что-то новое и быть в курсе происходящего в сети!"/>
          <meta property="og:url" content="https://profun.app/"/>
          <meta property="og:site_name" content="proFun.app"/>
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