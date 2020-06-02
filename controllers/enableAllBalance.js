/* eslint-disable linebreak-style */
const Models = require('models')

const { Balance } = Models

const logHead = '[Enable-all-balance] '
const enableAllBalance = async (req, res) => {
  console.log(`${logHead}Start`)
  const balanceQuery = { status: 'Blocked' }
  await Balance.updateMany(balanceQuery, { $set: { status: 'Enabled' } })
  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}
module.exports = enableAllBalance
