/* eslint-disable linebreak-style */
const Models = require('models')

const { Games } = Models
const logHead = '[Change-weights] '
const changeWeights = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { stake, weights } = req.body
  const gameQuery = { gameId: 88 }
  const update = { $set: {} }
  update.$set[`definition.symbolWeights.${stake}.low`] = weights
  update.$set[`definition.symbolWeights.${stake}.high`] = weights
  await Games.updateOne(gameQuery, update)
  const response = {
    status: 200,
    message: 'OK',
    weights
  }
  res.send(response)
}
module.exports = changeWeights
