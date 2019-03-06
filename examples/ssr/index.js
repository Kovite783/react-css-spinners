const express = require('express')
const React = require('react')
const ReactDOM = require('react-dom/server')
const { Grid } = require('react-css-spinners')

const PORT = process.env.PORT || 3000
const app = express()

app.get('*', (req, res) => {
  const el = React.createElement(Grid)
  const html = ReactDOM.renderToString(el)
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    </head>
    <body>
        ${html}
    </body>
    </html>
    `)
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
