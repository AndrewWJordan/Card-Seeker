const express = require('express')
const router = express.Router()

// general routes
router.get('/', (req, res) =>

//res.send('Welcome home.')
res.render('home', {data:'Sample Data'})
)

module.exports = router
