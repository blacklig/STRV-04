const fs = require('fs').promises
const databasePath = __dirname + '/../databases/'

async function loadDatabase (file) {
  let data = await fs.readFile( databasePath + file + '.json', 'utf-8')
  return JSON.parse(data)
}

async function saveDatabase (file, data) {
  await fs.writeFile( databasePath + file + '.json', JSON.stringify(data), 'utf-8')
}

module.exports = {
  loadDatabase,
  saveDatabase,
}