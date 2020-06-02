/* eslint-disable linebreak-style */
const Models = require('models')

const { Balance } = Models
const type = {
  slot: 4,
  poker: 1365
}
const logHead = '[Enable-balance] '
const enableBalance = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId, gameType } = req.body
  const balanceQuery = { userId, providerId: type[gameType] }
  await Balance.updateOne(balanceQuery, { status: 'Enabled' })
  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}
module.exports = enableBalance
