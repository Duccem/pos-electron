const { createPool } = require('mysql2/promise')
// import { createConnection } from 'mysql2/promise'
const { database } = require('./keys')

var connection = createPool(database)
console.log('[DATABASE] connected ' + connection)
export function getConnection () {
    return connection
}
