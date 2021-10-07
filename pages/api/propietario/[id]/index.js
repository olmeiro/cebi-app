// import db from '../../../../lib/db';
import db from '../../../openDB';

export default async function getPropietarioById(req, res) {

  if (req.method === "PUT") {
    const statement = await db.query(
      "UPDATE propietarios SET idpredio = $1, direccion= $2, email= $3, telefono= $4 WHERE idpropietario = $5",
      [
        req.body.idpredio,
        req.body.direccion,
        req.body.email,
        req.body.telefono,
        req.query.id,
      ]
    );
  }

  const propietario = await db.one('SELECT * FROM propietarios where idpropietario = $1', [req.query.id]);
  res.json(propietario);
}

// const resp = await fetch('http://localhost:3000/api/propietario/2', {
//     method: 'PUT', 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({idpredio: 1, direccion: 'Cra 49A sur', email: 'Maracana@gmail.com', telefono: 2785623})
//   });