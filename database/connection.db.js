const initOption = {
    //Initialization option
}

const pgp = require('pg-promise')(initOption );

//connection with database
const connectionString = 'postgres://postgres:admin@localhost:5432/test-lovely';

const db = pgp(connectionString);

module.exports = {
    pgp, db
};