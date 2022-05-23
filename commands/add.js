const conf = new (require('conf'))()
const chalk = require('chalk')
const axios = require('axios')


 async function add (repository) {
    let repositoryList = conf.get('todo-list')

    var name, bio, location;

    //search a respository if exist add then return an error

     await axios.get('https://api.github.com/users/' + repository).then((response)=>{

        if (!repositoryList) {
            //default value for todos-list
            todosList = []
        }
    
        name = response.data.name;
        bio = response.data.bio;
        location = response.data.location;

        const fulldata = `Name: ${name}-- Bio: ${bio} -- Contry: ${location}`

        //query to insert in database
        //var insert = await db.none('INSERT INTO documents(id, doc) VALUES(${name},${bio},${location}');


        repositoryList.push({
            text: fulldata,
            done: false
        })
    
        //set repository-list in conf
        conf.set('todo-list', repositoryList)
    
        //display message to user
        console.log(
            chalk.green.bold('Repository has been added successfully!')
        )

     }).catch((err)=> {
        {
            console.log(
                chalk.red.bold('this repository doesn\'t exist.' + err)
            )
        }
    });

}

module.exports = add