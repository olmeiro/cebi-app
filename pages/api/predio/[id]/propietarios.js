
import db from '../../../openDB';
import { validate } from '../../../../middleware/validate';
import { propietarioSchema } from '../../../../schemas/propietario';

//tratando de validar campos::

//http://localhost:3000/api/predio/1/propietarios

const handler = async(req, res) => {
  const httpMethod = req.method;

  switch (httpMethod) {
    case 'GET':
      const AllPrediosByPropietarioId = await db.any("SELECT * FROM propietarios where idpredio = $1", [req.query.id,]);
  
      res.status(200).json(AllPrediosByPropietarioId);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
  }
};

export default validate(propietarioSchema, handler);