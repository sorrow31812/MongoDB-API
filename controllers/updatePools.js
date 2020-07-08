const Models = require('models')

const { KeyValue, Pool, Game } = Models
const logHead = '[Update-pools] '
const updatePools = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { prize } = req.body
  const gameQuery = { gameId: 88 }
  const gameData = await Game.findOne(gameQuery)
  const { pools } = gameData.config
  const poolKeys = Object.keys(pools)

  for (const key of poolKeys) {
    switch(key) {
      case 'keyValue':
        let keyId = pools[key]
        let updateKeyValue = { $set: {
          'data.jps': prize,
          'data.jpm': prize,
          'data.jpl': prize
        } }
        await KeyValue.updateOne({ _id: keyId }, updateKeyValue)
        break
      default:
        let { _id } = pools[key]
        let updatePool = { prize }
        await Pool.updateOne({ _id }, updatePool)
        break
    }
  }

  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}
module.exports = updatePools
