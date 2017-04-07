import React from 'react'
import { renderToStaticMarkup,renderToString  } from 'react-dom/server'
import Test from './test'
var express = require('express');
var router = express.Router();


function render(res, Component, data) {
    const a = (
        <Component {...data} />
    )
    const html = renderToStaticMarkup(a)
    res.send(html)
}

/* GET home page. */
router.get('/', function(req, res, next) {
    render(res, Test)
});

module.exports = router;
