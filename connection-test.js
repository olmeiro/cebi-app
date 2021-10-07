// Proper way to initialize and share the Database object

// Loading and initializing the library:
const pgp = require('pg-promise')({
    // Initialization Options
});

// Preparing the connection details:
// const cn = 'postgres://postgres:root@host:5432/CEBI';

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'cebi',
    user: 'postgres',
    password: 'root',
    max: 30 // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

// Creating a new database instance from the connection details:
const db = pgp(cn);

async function setup(){
   

    try {
        const predios = await db.any('SELECT * FROM predios');
        console.log('allPredios', JSON.stringify(predios,null,2));
       
        const propietarios = await db.any('SELECT * FROM propietarios');
        console.log('allPropietarios', JSON.stringify(predios,null,2));
       
        const predioById = await db.any('SELECT * FROM predios where idpredio= $1',[2]);
        console.log('predioById', JSON.stringify(predioById,null,2));
    } 
    catch(e) {
        console.log(e);
    }
    

}

setup();