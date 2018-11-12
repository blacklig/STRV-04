'use strict'

const R = require('ramda')
const errors = require('../utils/errors')
const diskDB = require ('../utils/diskDatabase.js')

async function findAll() {
  let users = await diskDB.loadDatabase('users')
  return users
}

async function findById(id) {
  let users = await diskDB.loadDatabase('users')
  const user = R.find(R.propEq('id', id), users)
  if (!user) {
    throw new errors.NotFoundError()
  }
  return user
}

async function findByEmail(email) {
  let users = await diskDB.loadDatabase('users')
  return R.find(R.propEq('email', email), users)
}

async function create(user) {
  let users = await diskDB.loadDatabase('users')
  user.id = users.length + 1
  users.push(user)
  await diskDB.saveDatabase('users',users)
  return user
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
}
