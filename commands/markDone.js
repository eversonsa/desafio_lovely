const conf = new (require('conf'))()
const chalk = require('chalk')

function markDone({tasks}) {
    let repositoryList = conf.get('todo-list')

    if (repositoryList) {
        repositoryList = todosList.map((task, index) => {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    //mark only specified tasks by user as done
                    task.done = true
                }
            } else {
                //if the user didn't specify repository, mark all as done
                task.done = true
            }
            return task
        });

        //set the new repository-list
        conf.set('todo-list', repositoryList)
    }

    //show the user a message
    console.log(
        chalk.green.bold('Repository have been marked as done successfully')
    )
}

module.exports = markDone