import { useParams } from 'react-router-dom';



export default function PlantillaOracion() {
    let { id, title , oracionCorta } = useParams();
        console.log(id)
       return(
        <div>
        <h1>Oraciones Populares...</h1>
        <p>
            {id}
        </p>
</div>
       )
}