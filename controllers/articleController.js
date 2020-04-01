const express = require('express')
const router = express.Router()

// article new route: GET /articles/new
router.get('/new', (req, res) => {
  res.render('articles/new.ejs')
})

module.exports = router