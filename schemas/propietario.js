import {array, number, object, string, TypeOf} from 'yup';

export const propietarioSchema = object({
    idpropietario: number().required(),
    idpredio: number().required(),
    direccion: string().optional().required(),
    email: string().optional().email(),
    telefono: string().required(),
})

export default  propietarioSchema;