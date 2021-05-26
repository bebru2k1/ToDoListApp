
const express = require('express')
const route = express.Router()
const { verifyToken } = require('../middleware/verifyToken')
const {
    createListController,
    getListController,
    putListController,
    deleteListController
} = require('../controller/list.controller')


// @GET /v1/api/post
// @des getPost
// Private
route.get('/', verifyToken, getListController)

// @POST /v1/api/post
// @des create list
// Private
route.post('/', verifyToken, createListController)

// @POST /v1/api/post
// @des create list
// Private
route.put('/:id', verifyToken, putListController)

//@DELETE
//@des delete list
//Private
route.delete('/:id', verifyToken, deleteListController)

module.exports = route
