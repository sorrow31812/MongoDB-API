/* eslint-disable linebreak-style */
const express = require('express')

const router = express.Router()

const enableBalanceController = require('../controllers/enableBalance')

router.post('/enable-balance', enableBalanceController)

const changeAmountController = require('../controllers/changeAmount')

router.post('/change-amount', changeAmountController)

const enableAllBalanceController = require('../controllers/enableAllBalance')

router.get('/enable-all-balance', enableAllBalanceController)

const changeWeightsController = require('../controllers/changeWeights')

router.get('/change-weights', changeWeightsController)

module.exports = router
