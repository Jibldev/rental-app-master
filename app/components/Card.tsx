import logements from "../logements.json";
import "app/styles/card.sass";

function Card() {
  return (
    <div className="card-container">
      {logements.map((logement) => (
        <div key={logement.id} className="card">
          <img src={logement.cover} alt={`Photo de ${logement.title}`} />
          <div className="title">
            <h2>{logement.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
