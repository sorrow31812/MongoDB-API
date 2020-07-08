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
router.post('/change-weights', changeWeightsController)

const enabledBetRecordController = require('../controllers/enabledBetRecord')
router.post('/enabled-betRecord', enabledBetRecordController)

const enableUserController = require('../controllers/enableUser')
router.post('/enable-user', enableUserController)

const updatePoolsController = require('../controllers/updatePools')
router.post('/update-pools', updatePoolsController)

module.exports = router
