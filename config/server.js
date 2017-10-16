var express = require('express')
var app = express()
app.set('view engine','ejs')
//dir das views
app.set('views','./app/views')

module.exports = app
