const mongoose = require('mongoose')
const bluebird = require('bluebird')

bluebird.promisifyAll(mongoose)

const Mongoose = {
  init(opts) {
    return new Promise((resolve, reject) => {
      const { host } = opts
      delete opts.host
      mongoose.connect(host, opts, (err) => {
        if (err) {
          console.log('mongoose connected!')
          console.log(err)
          return reject(err)
        }

        console.log('mongoodb connected!')
        resolve()
      })

      mongoose.connection.on('disconnected', () => {
        console.log('mongodb disconnected!')
      })
    })
  },
  promisify() {
    return mongoose
  },
  async startSession() {
    return mongoose.startSession()
  }
}

module.exports = Mongoose
