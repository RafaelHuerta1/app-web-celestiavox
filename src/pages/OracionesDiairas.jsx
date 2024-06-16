import { Link } from "react-router-dom";
import '../style/oracionDiaria.css';

const OracionesDiairas = () => {
    const sentences = [
        {
            id:1,
            title: 'Oracion para comenzar tu dia.',
            oracionCorta: 'Señor, en este nuevo día que comienza, quiero darte gracias por tu infinito amor y por todas las bendiciones que me das. Ayúdame a vivir este día con alegría, amor y gratitud. Amén.',
            oracionLarga: '||   Señor, en este nuevo día que comienza, quiero darte gracias por tu infinito amor y por todas las bendiciones que me das. Ayúdame a vivir este día con alegría, amor y gratitud. Amén. Bendice mi trabajo, mis relaciones y mis pensamientos. Que todo lo que haga sea para tu gloria y para mi bien. Amén. Bendice a mi familia, mis amigos y a todos los que me rodean. Que tu amor y tu paz estén siempre con nosotros. Amén. Gracias, Señor, por este nuevo día. Amén.'
        },
        {
            id:2,
            title: 'Oracion para antes de dormir.',
            oracionCorta: 'Señor, en este momento de silencio y paz, quiero darte gracias por este día que termina. Ayúdame a descansar en tu amor y a confiar en tu misericordia. Amén.',
            oracionLarga: '||   Señor, en este momento de silencio y paz, quiero darte gracias por este día que termina. Ayúdame a descansar en tu amor y a confiar en tu misericordia. Amén. Perdona mis faltas y ayúdame a ser mejor cada día. Amén. Bendice a mi familia, mis amigos y a todos los que me rodean. Que tu amor y tu paz estén siempre con nosotros. Amén. Gracias, Señor, por este día que termina. Amén.'
        },
        {
            id:3,
            title: 'Oracion para antes de comer.',
            oracionCorta: 'Bendice, Señor, estos alimentos que vamos a tomar. Que nos den fuerzas para seguir adelante y nos recuerden tu amor y tu bondad. Amén.',
            oracionLarga: '||   Bendice, Señor, estos alimentos que vamos a tomar. Que nos den fuerzas para seguir adelante y nos recuerden tu amor y tu bondad. Amén. Ayúdanos a compartir con los demás y a ser generosos con los que tienen menos que nosotros. Amén. Gracias, Señor, por este alimento que nos das. Amén.'  
        },
        {
            id:4,
            title: 'Oracion para pedir perdon.',
            oracionCorta: 'Señor, perdóname por mis faltas y ayúdame a ser mejor cada día. Ayúdame a perdonar a los demás y a vivir en paz y armonía. Amén.',
            oracionLarga: '||   Señor, perdóname por mis faltas y ayúdame a ser mejor cada día. Ayúdame a perdonar a los demás y a vivir en paz y armonía. Amén. Ayúdame a ser más comprensivo y a ponerme en el lugar de los demás. Amén. Gracias, Señor, por tu amor y tu misericordia. Amén.'
        },
        {
            id:5,
            title: 'Oracion para pedir ayuda.',
            oracionCorta: 'Señor, en este momento de necesidad, te pido que me ayudes y me guíes. Dame fuerzas para seguir adelante y confianza en tu amor y tu misericordia. Amén.',
            oracionLarga: '||   Señor, en este momento de necesidad, te pido que me ayudes y me guíes. Dame fuerzas para seguir adelante y confianza en tu amor y tu misericordia. Amén. Ayúdame a ser valiente y a confiar en ti en todo momento. Amén. Gracias, Señor, por tu amor y tu protección. Amén.'
        }
    ];

    return (
        <div>
                <h1 className="h1__oracion__diaria">Oraciones Populares...</h1>
                <div className="card__oraciones__diarias_main">
            {sentences.map((sentence, index) => (
                
                <div key={index} className="card__oraciones__diarias">
                     <h2> {sentence.title}  </h2>
               
                    <p>{sentence.oracionCorta}</p>
                    <Link
                    to={`/plantilla-oracion/${sentence.id, sentence.title, sentence.oracionLarga}`}
                    >
                        Ir
                    </Link>
                </div>
            ))}
            </div>
        </div>
    );
};

export default OracionesDiairas;