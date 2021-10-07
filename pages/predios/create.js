import MiLayout from '../../components/layout';
import CrearPredios from '../../components/CrearPredios';

export default function Create({ predios }) {

  

  return (
    <>
        <MiLayout Create>
            <CrearPredios predios={predios}/>
        </MiLayout>
    </>
  );
}