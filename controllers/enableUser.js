/* eslint-disable linebreak-style */
const Models = require('models')
const redis = require('lib').redis

const { Balance, User } = Models
const type = {
  slot: 4,
  poker: 1365
}
const logHead = '[Enable-user] '
const enableUser = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId, gameType, gameId } = req.body

  const redisKey = `poker:${gameId}:${userId}`
  await redis.del(redisKey)

  const balanceQuery = { userId, providerId: type[gameType] }
  await Balance.updateOne(balanceQuery, { status: 'Enabled' })

  const userQuery = { id: userId }
  await User.updateOne(userQuery, { status: 'Enabled' })

  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}
module.exports = enableUser
