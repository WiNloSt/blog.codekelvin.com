import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
    displayName: 'HTML',
    propTypes: {
        body: React.PropTypes.string,
    },
    render() {
        const {body, route} = this.props
        const title = DocumentTitle.rewind()
        const font = <link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700&subset=latin,cyrillic' rel='stylesheet' type='text/css' />
        let css
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={ {    __html: require('!raw!./public/styles.css')} } />
        }

        return (
            <html lang="en">
            <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />

              {/* favicon stuffs */}
              <link rel="apple-touch-icon" sizes="57x57" href="icon/apple-touch-icon-57x57.png" />
              <link rel="apple-touch-icon" sizes="60x60" href="icon/apple-touch-icon-60x60.png" />
              <link rel="apple-touch-icon" sizes="72x72" href="icon/apple-touch-icon-72x72.png" />
              <link rel="apple-touch-icon" sizes="76x76" href="icon/apple-touch-icon-76x76.png" />
              <link rel="apple-touch-icon" sizes="114x114" href="icon/apple-touch-icon-114x114.png" />
              <link rel="apple-touch-icon" sizes="120x120" href="icon/apple-touch-icon-120x120.png" />
              <link rel="apple-touch-icon" sizes="144x144" href="icon/apple-touch-icon-144x144.png" />
              <link rel="apple-touch-icon" sizes="152x152" href="icon/apple-touch-icon-152x152.png" />
              <link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon-180x180.png" />
              <link rel="icon" type="image/png" href="icon/favicon-32x32.png" sizes="32x32" />
              <link rel="icon" type="image/png" href="icon/android-chrome-192x192.png" sizes="192x192" />
              <link rel="icon" type="image/png" href="icon/favicon-96x96.png" sizes="96x96" />
              <link rel="icon" type="image/png" href="icon/favicon-16x16.png" sizes="16x16" />
              <link rel="manifest" href="manifest.json" />
              <link rel="mask-icon" href="icon/safari-pinned-tab.svg" color="#44bbff" />
              <meta name="msapplication-TileColor" content="#44bbff" />
              <meta name="msapplication-TileImage" content="icon/mstile-144x144.png" />
              <meta name="theme-color" content="#4bf" />
              {/* end favicon stuffs */}

              <title>
                { title }
              </title>
              { font }
              { css }
            </head>
            <body>
              <div id="react-mount" dangerouslySetInnerHTML={ {    __html: this.props.body} } />
              <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) } />
            </body>
            </html>
        )
    },
})
