// const Users = require('../models/users')
const UserAccount = require('../models/userAccount')

// log in
const logIn = async (req, res) => {
  console.log(`[Log-in] Start: ${JSON.stringify(req.body)}`)
  const { id, password } = req.body
  const userAccountQuery = { id }

  const userAccount = await UserAccount.findOne(userAccountQuery)
  console.log('Create user account')

  const { password: pw } = userAccount
  const success = (pw === password)
  const response = {
    status: 200,
    message: 'OK',
    id,
    success
  }

  res.send(response)
}


module.exports = logIn
