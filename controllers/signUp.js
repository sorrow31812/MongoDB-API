const Users = require('../models/users')
const UserAccount = require('../models/userAccount')

// signUp
const signUp = async (req, res) => {
  console.log(`[Sign-up] Start: ${JSON.stringify(req.body)}`)
  const {
    id, password, name, islandname, fruit, intro, fruitpicture
  } = req.body

  const userData = {
    username: name,
    userpicture: 4,
    islandname,
    fruit,
    fruitpicture,
    intro,
    status: 'Open'
  }

  const user = await Users.create(userData)
  console.log('Create user')
  const { _id } = user
  const userAccountData = {
    user: _id,
    id,
    password
  }

  await UserAccount.create(userAccountData)
  console.log('Create user account')

  const response = {
    status: 200,
    message: 'OK',
    id
  }

  res.send(response)
}


module.exports = signUp
