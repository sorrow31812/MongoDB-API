const Users = require('../models/users')
// const UserAccount = require('../models/userAccount')

// signUp
const getUserData = async (req, res) => {
  console.log(`[Get-user-data] Start: ${JSON.stringify(req.body)}`)
  const { name } = req.body
  const userQuery = {
    username: name
  }
  const userData = await Users.findOne(userQuery)
  const response = {
    status: 200,
    message: 'OK',
    userData
  }
  res.send(response)
}


module.exports = getUserData
