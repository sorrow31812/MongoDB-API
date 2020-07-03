/* eslint-disable linebreak-style */
const Models = require('models')

const { BetRecord } = Models

const logHead = '[Enable-betRecord] '
const enabledBetRecord = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { spinId } = req.body
  const betRecordQuery = { _id: spinId }
  await BetRecord.updateMany(betRecordQuery, { $set: { status: 'Close' } })
  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}
module.exports = enabledBetRecord
