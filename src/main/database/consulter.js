import { selectSQL, selectSQLOne, selectByFilter, makeInsert } from './querys'
import { getConnection } from './database'
const chalk = require('chalk')

/**
 * This function get all of the elements on the table
 * @param {string} model  model of the table
 * @param {JSON} query paramaters to modify the consult
 * ```
 * query:{fields:'id', limit:50, offset:0, order:'asc', orderField:'id'}
 * ```
 */
export async function get (model, query) {
    let connection = getConnection()
    let sql = selectSQL(query, model)
    try {
        let data = await connection.query(sql)
        let response = JSON.parse(JSON.stringify(data[0]))
        return response
    } catch (error) {
        if (error.code === 'ER_PARSE_ERROR' || error.code === 'ER_BAD_FIELD_ERROR') {
            console.log(`${chalk.red('[ERROR]')} ${error}`)
            throw new Error('BD_SYNTAX_ERROR')
        }
        if (error.code === 'ER_NO_SUCH_TABLE') {
            console.log(`${chalk.red('[ERROR]')} ${error}`)
            throw new Error('BD_TABLE_ERROR')
        }
        throw new Error(`Error en conexion connection la BD, error: ${error}`)
    }
}

/**
 * This function return the object especified if exist
 * @param {string} model model of the table
 * @param {number} id id of the register in the table
 * @param {JSON} query paramaters to modify the consult
 * ```javascript
 *- query:{
 *-      fields:'id',
 *-      limit:50,
 *-      offset:0,
 *-      order:'asc',
 *-      orderField:'id'
 *- }
 * ```
 */
export async function getOne (model, id, query) {
    let connection = getConnection()
    let sql = selectSQLOne(id, query, model)
    try {
        let data = await connection.query(sql)
        if (!data[0][0]) return null
        let response = JSON.parse(JSON.stringify(data[0][0]))
        return response
    } catch (error) {
        if (error.code === 'ER_PARSE_ERROR' || error.code === 'ER_BAD_FIELD_ERROR') {
            console.log(`${chalk.red('[ERROR]')} ${error}`)
            throw new Error('BD_SYNTAX_ERROR')
        }
        throw new Error(`Error en conexion connection la BD, error: ${error}`)
    }
}

/**
 * This function return a collection of objects filtered by other entity on the database
 * @param {string} model model of the table
 * @param {number} id id of register in the table
 * @param {string} other model of the other entity
 * @param {JSON} query parameters to modify the consult
 * ```
 * query:{fields:'id', limit:50, offset:0, order:'asc', orderField:'id'}
 * ```
 */
export async function getOtherByMe (model, id, other, query) {
    let connection = getConnection()
    let sql = selectByFilter(query, other, model, id)
    try {
        let data = await connection.query(sql)
        let response = JSON.parse(JSON.stringify(data[0]))
        return response
    } catch (error) {
        if (error.code === 'ER_PARSE_ERROR' || error.code === 'ER_BAD_FIELD_ERROR') {
            console.log(`${chalk.red('[ERROR]')} ${error}`)
            throw new Error('BD_SYNTAX_ERROR')
        }
        throw new Error(`Error en conexion connection la BD, error: ${error}`)
    }
}

/**
 * This function create a new register in the bd
 * @param {string} model model of the table
 * @param {JSON} object the new object to introduce in the db
 */
export async function create (model, object) {
    let connection = getConnection()
    try {
        let inserted = await connection.query(`INSERT INTO ${model} set ?`, [object])
        return inserted[0]
    } catch (error) {
        if (error.code === 'ER_PARSE_ERROR' || error.code === 'ER_BAD_FIELD_ERROR' || error.code === 'ER_NO_REFERENCED_ROW_2') {
            console.log(`${chalk.red('[ERROR]')} ${error}`)
            throw new Error('BD_SYNTAX_ERROR')
        }
        throw new Error(`Error en conexion connection la BD, error: ${error}`)
    }
}

export async function insertMany (model, array) {
    let connection = getConnection()
    try {
        let arrVals = []
        array.forEach(element => {
            arrVals.push(Object.values(element))
        })
        let fields = makeInsert(array[0])
        let inserted = await connection.query(`INSERT INTO ${model} (${fields}) VALUES ?`, [arrVals])
        return inserted[0]
    } catch (error) {
        if (error.code === 'ER_PARSE_ERROR' || error.code === 'ER_BAD_FIELD_ERROR' || error.code === 'ER_NO_REFERENCED_ROW_2') {
            console.log(`${chalk.red('[ERROR]')} ${error}`)
            throw new Error('BD_SYNTAX_ERROR')
        }
        throw new Error(`Error en conexion connection la BD, error: ${error}`)
    }
}

/**
 * This function update a register in the bd
 * @param {string} model model of the table
 * @param {number} id id of the register in the table
 * @param {JSON} object object to update in the db
 */
export async function update (model, id, object) {
    let connection = getConnection()
    try {
        let updated = await connection.query(`UPDATE ${model} set ? WHERE id = ?`, [object, id])
        return updated[0]
    } catch (error) {
        if (error.code === 'ER_PARSE_ERROR' || error.code === 'ER_BAD_FIELD_ERROR' || error.code === 'ER_NO_REFERENCED_ROW_2') {
            console.log(`${chalk.red('[ERROR]')} ${error}`)
            throw new Error('BD_SYNTAX_ERROR')
        }
        throw new Error(`Error en conexion connection la BD, error: ${error}`)
    }
}

/**
 * This function delete a register from de bd
 * @param {string} model model of the table
 * @param {number} id id of the register
 */
export async function remove (model, id) {
    let connection = getConnection()
    try {
        let deleted = await connection.query(`DELETE FROM ${model} WHERE id = ? `, [id])
        return deleted
    } catch (error) {
        throw new Error(`Error en conexion connection la BD, error: ${error}`)
    }
}

/**
 * Execute a custom SQL sentence
 * @param {string} sql SQL sentence to execute
 */
export async function query (sql) {
    let connection = getConnection()
    try {
        let data = await connection.query(sql)
        let response = JSON.parse(JSON.stringify(data[0]))
        return response
    } catch (error) {
        if (error.code === 'ER_PARSE_ERROR' || error.code === 'ER_BAD_FIELD_ERROR') {
            console.log(`${chalk.red('[ERROR]')} ${error}`)
            throw new Error('BD_SYNTAX_ERROR')
        }
        throw new Error(`Error en conexion connection la BD, error: ${error}`)
    }
}

/**
 * This function return the total count of register in a table
 * @param {string} model model of the table
 */
export async function count (model) {
    let connection = getConnection()
    try {
        let count = await connection.query(`SELECT COUNT(id) as total FROM ${model}`)
        let total = count[0][0].total
        return total
    } catch (error) {
        throw new Error(`Error en conexion connection la BD, error: ${error}`)
    }
}

/**
 * This function return the count of all register related to other table
 * @param {string} model the model of the table
 * @param {number} id the id of the register
 * @param {string} other the other table
 */
export async function countOther (model, id, other) {
    let connection = getConnection()
    try {
        let count = await connection.query(`SELECT COUNT(id) as total FROM ${other} WHERE ${model}_id = ${id}`)
        let total = count[0][0].total
        return total
    } catch (error) {
        throw new Error(`Error en conexion connection la BD, error: ${other}`)
    }
}
