import { Routes, Route, useParams } from 'react-router-dom';

export default function PlantillaOracion() {
       
       let { oracionLarga } = useParams();
       console.log(oracionLarga);

       return(
                     <div>
                     <h1>11,  {oracionLarga} </h1>
                     <p>
                     --2
                     </p>
              </div>
       )
}