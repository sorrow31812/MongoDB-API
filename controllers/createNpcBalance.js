/* eslint-disable linebreak-style */
const Models = require('models')
const { Balance, User } = Models
const _ = require('lodash')

const logHead = '[Create-npc-balance] '
const createNpcBalance = async (req, res) => {
  console.log(`${logHead}Start`)
  const userQuery = { test: true, operatorId: 106 }
  let usersData = await User.find(userQuery)

  for(let user of usersData) {
    const { _id, username, userId, operatorId, operator } = user
    let balData = await Balance.findOne({ userId })
    if (!_.size(balData)) {
      console.log(`${logHead}Create balance: ${userId} / ${username}`)
      let balanceData = {
        amount : 100000,
        totalIn : 0,
        totalOut : 0,
        profit : 0,
        totalStake : 0,
        totalWin : 0,
        totalBetCount : 0,
        maxStake : 0,
        minStake : 0,
        test : false,
        currency : 'CNY',
        isNpc : true,
        gemAmount : 10000,
        gemTotal : 0,
        gemFreeTotal : 0,
        freePointAmount : 0,
        freePointTotal : 0,
        actived : true,
        status : 'Enabled',
        username,
        providerId : 4,
        provider : '5c7de20fe66f7c99571450b9',
        userId,
        user : _id,
        operatorId,
        operator
      }
  
      await Balance.create(balanceData)
    }
  }

  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}
module.exports = createNpcBalance
