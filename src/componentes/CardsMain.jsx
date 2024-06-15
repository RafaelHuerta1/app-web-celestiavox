import { useEffect, useState } from "react";
import '../style/card.css'
import { Outlet, Link } from "react-router-dom";



const cards = [
    {
        id: 1,
        title: "Oraciones Diairas",
        description: "Oraciones para tu dia a dia, para que puedas tener un dia lleno de bendiciones"
    },
    {
    id: 2,
    title: "Oraciones a los SANTOS",
    description: "Encuentra consuelo y fortaleza en la intercesión de los santos con estas oraciones cuidadosamente seleccionadas."
},
{
    id: 3,
    title: "Oraciones Personalizadas",
    description: "Crea una conexión más profunda con tu fe con oraciones personalizadas que reflejen tus propias necesidades y gratitudes."
},
    

];
const {id, title, description, image} = cards;
console.log(title, description, image);


function CardsMain(){
    const [card, setCard] = useState(cards);
   // const [rutaPag, setRutaPag] = useState("/oraciones-diarias");
   const [rutaPag, setRutaPag] = useState("");


    const createRuta =   (e) => {
        console.log('|| ',e)
        if(e === undefined) return;
        if(e.target.id === '1'){
             setRutaPag("/oraciones-diarias");
             console.log("rutaPag ||",rutaPag)
        }
        else if(e.target.id === '2'){
            setRutaPag("/oraciones-santos");
            console.log("rutaPag ||",rutaPag)

        }
        
    }

    useEffect(() => {
        console.log("useEffect ||");
        console.log(rutaPag);    
         createRuta();    
    }, [rutaPag]);

    return (
        <div className="oraciones__container__main">
            <h1 className="title__oraciones">Oraciones para tu vida</h1>
            <div className="cotainer__card__main">
                {card.map((card) => (
                    <div key={card.id} className="container__main__oracion__card">
                        <h2>{card.title}</h2>
                        <p className="card__descripcion" >{card.description}</p>
                        <button className="btn__main" >
                        <Link id={String(card.id)} onClick={createRuta} to={rutaPag} >Leer</Link>
                        </button>

                    </div>
                ))}
            </div>
            <img src="https://th.bing.com/th/id/OIG4.LGm_0CDGAAj2ibUmmzvY?pid=ImgGn" alt="descripción de la imagen" className="imgMain"/>

        </div>
    );
}

export default CardsMain;