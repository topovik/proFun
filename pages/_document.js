import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    const GA_TRACKING_ID = 'UA-124910376-1';
    
    let IndexTitle = "proFun.app";
    let IndexDescription = "proFun.app - лучшие статьи, подборки, угарные треши со всей сети! Есть что посмотреть, почитать и поугарать. Наша задача - Ваше веселое времяпровождение";
    let IndexKeywords = "Лучшее в сети, свежие новости, лучшие подборки, лучшие топы, новые фильмы, лучшая музыка, бизнес, новые игры, it, финансы";
    let IndexOgTitle = "proFun.app - самое интересное и свежее из сети!";
    let IndexOgDescription = "Ресурс, который поможет с пользой провести время, узнать что-то новое и быть в курсе происходящего в сети!";
    let IndexOgUrl = "https://profun.app";
    let IndexOgImg = "https://profun.app/static/weather/proFun_Logo.png";
    return (
      <html lang="ru-RU">
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
          <meta charSet="utf-8"/>  
          <meta httpEquiv="content-type" content="text/html"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>{this.props.__NEXT_DATA__.props.pageProps.title || IndexTitle}</title>
          <meta name="description" content={this.props.__NEXT_DATA__.props.pageProps.description || IndexDescription} />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" type="image/x-icon" href="/static/weather/favicon.ico" />
          <meta name="keywords" content={this.props.__NEXT_DATA__.props.pageProps.keywords || IndexKeywords} />
          <meta property="og:title" content={this.props.__NEXT_DATA__.props.pageProps.title || IndexOgTitle} />
          <meta property="og:description" content={this.props.__NEXT_DATA__.props.pageProps.description || IndexOgDescription} />
          <meta property="og:image" content={this.props.__NEXT_DATA__.props.pageProps.ogImgUrl || IndexOgImg} />
          <meta property="og:url" content={this.props.__NEXT_DATA__.props.pageProps.ogUrl || IndexOgUrl} />
          <meta property="og:type" content="article"/>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}