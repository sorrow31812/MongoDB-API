/* eslint-disable linebreak-style */
const Models = require('models')

const { Pool } = Models
const provider = '5c7de20fe66f7c99571450b9'
const operator = '5c84e9d5d37e5d4b9839743b'
const game = '5e69a677cefad6001cb5daef'
const type = ['jps', 'jpm', 'jpl']
const gameClassAry = ['1', '2', '3', '4']
const config = {
  jps: {
    odds : 600,
    releaseLevel : 3000,
    minStake : 5,
    maxStake : 150
  },
  jpm: {
    odds : 2000,
    releaseLevel : 100000,
    minStake : 50,
    maxStake : 150
  },
  jpl: {
    odds : 10000,
    releaseLevel : 1000000,
    minStake : 100,
    maxStake : 150
  },
}

const logHead = '[Add-pools] '
const addPools = async (req, res) => {
  console.log(`${logHead}Start`)
  for (let category of type) {
    let { odds, releaseLevel, maxStake, minStake } = config[category]
    for (let gameClass of gameClassAry) {
      const poolData = {
        type : 'slot',
        category,
        odds,
        initialLevel : 0,
        prize : 0,
        designated : true,
        isFull : false,
        betCount : 0,
        test : false,
        actived : true,
        status : 'Enabled',
        releaseLevel,
        minStake,
        maxStake,
        provider,
        providerId : 4,
        operator,
        operatorId : 106,
        game,
        gameId : 88,
        gameClass
      }
      await Pool.create(poolData)
    }
  }
  
  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}
module.exports = addPools
