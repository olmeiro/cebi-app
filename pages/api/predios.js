// import { GetStaticProps, GetServerSideProps } from 'next';
import db from '../openDB';

export default async function getAllPredios(req, res) {
  const httpMethod = req.method;

  switch (httpMethod) {
    case "GET":
      const predios = await db.any("SELECT * FROM predios");
      res.status(200).json({ predios });
      break;
    case "POST":
      const query = await db.query(
        "INSERT INTO predios (numpredial, avaluo, nombre, departamento, municipio) VALUES ($1, $2, $3, $4, $5)",
        [
          req.body.numpredial,
          req.body.avaluo,
          req.body.nombre,
          req.body.departamento,
          req.body.municipio,
        ]
      )
      res.status(200).json(query);
      break;

    default:
      break;
  }
}


// export default async function getAllPredios(req, res) {

//   const predios = await db.any('SELECT * FROM predios');

//   const httpMethod = req.method;
//   const {numpredial, avaluo, nombre, departamento, municipio} = req.body;

//   switch(httpMethod) {
//     case 'GET':
//       res.status(200).json(predios);
//       break;
//     case 'POST':
//       res.status(200).json({
//         numpredial: numpredial,
//         avaluo: avaluo,
//         nombre: nombre,
//         departamento: departamento,
//         municipio: municipio
//       });
//       break;
//     default:
//       res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${httpMethod} Not Allowed`);
//   }
// }

// const request = await fetch('http://localhost:3000/api/predios', {
//     method: 'POST', 
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.parse({numpredial: 117, avaluo: 5530260, nombre: 'La Juana', departamento:'Antioquia', municipio: 'Anorí'})
//   });
//await resp.json();


