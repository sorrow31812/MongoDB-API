/* eslint-disable linebreak-style */
const Models = require('models')

const { Balance } = Models
const type = {
  slot: 4,
  poker: 1365
}
const logHead = '[change-amount] '
const changeAmount = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId, amount, gameType } = req.body
  const balanceQuery = { userId, providerId: type[gameType] }
  await Balance.updateOne(balanceQuery, { amount })
  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}
module.exports = changeAmount
