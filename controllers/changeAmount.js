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
  const { userId, amount, gameType, gemAmount } = req.body
  const balanceQuery = { userId, providerId: type[gameType] }
  let update = { amount }
  if (gemAmount) update.gemAmount = gemAmount
  await Balance.updateOne(balanceQuery, update)
  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}
module.exports = changeAmount
