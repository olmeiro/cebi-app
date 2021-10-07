import MiLayout from '../../../components/layout';
import UpdatePredios from '../../../components/UpdatePredios';


export default function Update({ predios }) {


  return (
    <>
        <MiLayout Update>
            <UpdatePredios predios={predios}/>
        </MiLayout>
    </>
  );
}