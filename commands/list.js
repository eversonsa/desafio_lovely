const conf = new (require('conf'))()
const chalk = require('chalk')
const { db } = require('../database/connection.db')


 function list () {
    const repositoryList = conf.get('todo-list')

    if (repositoryList && repositoryList.length) {
        console.log(
            chalk.blue.bold('Repository in green are save in database. Repository in yellow are still not saved.')
        )
        
        //query to selct data for database
       // task = await db.many('SELECT * FROM "USERS"')

        repositoryList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.yellowBright(`${index}. ${task.text}`)
                )
            }
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any repository yet.')
        )
    }
}

module.exports = list