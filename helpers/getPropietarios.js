import db from '../pages/openDB'


export default async function getPropietarios(req, res) {
  const propietarios = await db.any('SELECT * FROM propietarios');
  res.json({propietarios});
}