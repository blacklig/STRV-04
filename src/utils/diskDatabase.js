const fs = require('fs').promises
const databasePath = __dirname + '/../database/'

async function loadDatabase (file) {
  try {
    let data = await fs.readFile( databasePath + file + '.json', 'utf-8')
    return JSON.parse(data)
  }
  catch (err)
  {
    throw err
  }
}

async function saveDatabase (file, data) {
  try {
    await fs.writeFile( databasePath + file + '.json', JSON.stringify(data), 'utf-8')
  }
  catch (err)
  {
    throw err
  }
}

module.exports = {
  loadDatabase,
  saveDatabase,
}