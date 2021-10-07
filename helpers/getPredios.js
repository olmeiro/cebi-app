
export default async function getPropietarios(idpredio) {
    const res = await  fetch(`http://localhost:3000/api/predio/${idpredio}`);
    const predio = await res.json();
    
    return {
        props: {
            predios,
        }
    }
}