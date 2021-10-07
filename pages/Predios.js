
import MiLayout from '../components/layout';
import { ListaPredios } from '../components/ListaPredios';

export default function Predios({ predios }) {
    
    
  return (
    <>
        <MiLayout Predios>
            <ListaPredios predios={predios}/>
        </MiLayout>
    </>
  );
}

export const getServerSideProps = async ctx => {
    const res = await  fetch('http://localhost:3000/api/predios');
    const predios = await res.json();
    
    return {
        props: {
            predios,
        }
    }
}