import { Routes, Route, useParams } from 'react-router-dom';
import '../style/orcLarga.css'


export default function PlantillaOracion() {
       
       let { oracionLarga } = useParams();
       console.log(oracionLarga);

       return(
                                   <div className='container-main-orcLarga'>
                                   <h2 className='title-orcLarga'> Reflexionemos  </h2>
                                   <p
                                   className='parrafo-orcLarga'
                                   >
                                             {oracionLarga}
                                   </p>
                      </div>
       )
}