// Loading and initializing the library:
const pgp = require('pg-promise')();

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'cebi',
    user: 'postgres',
    password: 'root',
    max: 30 
};

// Creating a new database instance from the connection details:
// const db = pgp(cn);

const db = pgp(`postgres://${cn.user}:${cn.password}@${cn.host}:${cn.port}/${cn.database}`);

export default db;