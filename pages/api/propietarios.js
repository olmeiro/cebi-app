// import { NextApiRequest, NextApiResponse } from "next";

// const pgp = require('pg-promise')({});

// const cn = {
//   host: 'localhost',
//   port: 5432,
//   database: 'cebi',
//   user: 'postgres',
//   password: 'root',
//   max: 30 
// };

// const db = pgp(cn);

import db from '../openDB';


export default async function getPropietarios(req, res) {
  const propietarios = await db.any('SELECT * FROM propietarios');
  res.json({propietarios});
}