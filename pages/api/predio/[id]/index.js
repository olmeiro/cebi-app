
import db from '../../../openDB';

export default async function getPredioById(req, res) {
  const httpMethod = req.method;

  switch (httpMethod) {

    case "GET":
      const predio = await db.one("SELECT * FROM predios where idpredio = $1", [req.query.id]);
      res.json(predio);
      break;

    case "PUT":
      const statement = await db.query(
        "UPDATE predios SET numpredial = $1, avaluo= $2, nombre= $3, departamento= $4, municipio=$5   WHERE idpredio = $6",
        [
          req.body.numpredial,
          req.body.avaluo,
          req.body.nombre,
          req.body.departamento,
          req.body.municipio,
          req.query.id,
        ]
      );
      res.status(200).json(statement);
    case 'DELETE':
      res.status(200).json();
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT","DELETE","POST"]);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
  }
}

// UPDATE public.predios
// 	SET idpredio=?, numpredial=?, avaluo=?, nombre=?, departamento=?, municipio=?
// 	WHERE <condition>;


// const resp = await fetch('http://localhost:3000/api/predio/2', {
//     method: 'PUT', 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({numpredial: 112, avaluo: 18000000, nombre: 'Maracana', departamento:'Antioquia', municipio: 'Caldas'})
//   });
// await resp.json();