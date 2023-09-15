const express = require('express');
const {Adduser ,CheckUser} = require('../Api/Api')

const route = express.Router();


route.post('/authentication/login', CheckUser)

route.post('/authentication/register', Adduser)

module.exports = route