import { Link } from "react-router-dom";
import '../style/oracionDiaria.css';

const OracionesDiairas = () => {
    const sentences = [

        {
            "id": 1,
            "title": "Oración para comenzar tu día",
            "descripcion": "Señor, en este nuevo día que comienza, quiero darte gracias por tu infinito amor y por todas las bendiciones que me das. Ayúdame a vivir este día con alegría, amor y gratitud. Amén.",
            "oracionLarga": "Señor, en este nuevo día que comienza, quiero darte gracias por tu infinito amor y por todas las bendiciones que me das. Ayúdame a vivir este día con alegría, amor y gratitud. Amén. Bendice mi trabajo, mis relaciones y mis pensamientos. Que todo lo que haga sea para tu gloria y para mi bien. Amén. Bendice a mi familia, mis amigos y a todos los que me rodean. Que tu amor y tu paz estén siempre con nosotros. Amén. Gracias, Señor, por este nuevo día. Amén."
        },
        {
            "id": 2,
            "title": "Oración de confianza",
            "descripcion": "Dios, te entrego este día y confío en que guiarás mis pasos. Ayúdame a ser una bendición para los demás.",
            "oracionLarga": "Dios, te entrego este día y confío en que guiarás mis pasos. Ayúdame a ser una bendición para los demás. Que la luz de tu amor ilumine mi camino y me dé fuerzas para enfrentar cualquier desafío. Amén."
        },
        {
            "id": 3,
            "title": "Oración de sabiduría",
            "descripcion": "Señor, te pido sabiduría para tomar decisiones acertadas y paciencia para aceptar lo que no puedo cambiar.",
            "oracionLarga": "Señor, te pido sabiduría para tomar decisiones acertadas y paciencia para aceptar lo que no puedo cambiar. Que mi corazón esté lleno de gratitud y mi mente enfocada en lo positivo. Amén."
        },
        {
            "id": 4,
            "title": "Oración por la sanidad",
            "descripcion": "Bendice a quienes están enfermos y dales sanidad. Amén.",
            "oracionLarga": "Bendice a quienes están enfermos y dales sanidad. Amén. Gracias por la oportunidad de vivir un nuevo día. Que sea un día de crecimiento y aprendizaje. Amén."
        },
        {
            id: 5,
            title: "Oración por la paz",
            descripcion: "Señor, danos tu paz que sobrepasa todo entendimiento. Amén.",
            oracionLarga: "Señor, danos tu paz que sobrepasa todo entendimiento. Amén. Que tu amor y tu misericordia nos acompañen en todo momento. Amén."
        },
        {
            id: 6,
            title: "Oración por la familia",
            descripcion: "Bendice a mi familia, Señor, y ayúdanos a crecer en amor y unidad. Amén.",
            oracionLarga: "Bendice a mi familia, Señor, y ayúdanos a crecer en amor y unidad. Amén. Que tu amor y tu paz estén siempre con nosotros. Amén."
        },
        {
            id: 7,
            title: "Oración por la protección",
            descripcion: "Señor, protégenos de todo mal y peligro. Amén.",
            oracionLarga: "Señor, protégenos de todo mal y peligro. Amén. Que tu amor y tu misericordia nos acompañen en todo momento. Amén."
        }
    
       
    ];

    return (
        <div>
                <h1 className="h1__oracion__diaria">Oraciones Populares...</h1>
                <div className="card__oraciones__diarias_main">
            {sentences.map((sentence, index) => (
                
                <div key={index} className="card__oraciones__diarias">
                     <h2> {sentence.title}  </h2>
               
                    <p>{sentence.descripcion}</p>
                    <Link
                    className="btn__oracion__diaria"
                    to={`/plantilla-oracion/${sentence.oracionLarga}`} 

                    >
                        Leer
                    </Link>
                </div>
            ))}
            </div>
        </div>
    );
};

export default OracionesDiairas;