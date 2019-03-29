const express = require('express')
const app = express()
const hbs  = require('express-handlebars')
const port = 3000

require('dotenv').config()

//let query = 'OPERATION-NAME=findCompletedItems&SECURITY-APPNAME=' + process.env.PROD_KEY + '&X-EBAY-SOA-RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=216&keywords=' + keywords + '&itemFilter(0).name=SoldItemsOnly&itemFilter(0).value=true&sortOrder=EndTimeSoonest'

// include routes
app.use(require('./controllers'))

// set templating engine w/ helpers
app.engine('handlebars', hbs({
  defaultLayout: 'main',
  helpers: {
    encode: function(url) {
      url = encodeURIComponent(url)
      return url
    },
    convert: function(score) {
      score = score * 100
      return score
    },
    average: function(arr) {
      let total = null
      for(let num of arr) {
        total += parseFloat(num)
      }
      return ((total / arr.length) * 100).toFixed(0)
    }
  }
}))

app.set('view engine', 'handlebars')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
