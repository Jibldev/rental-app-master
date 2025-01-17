import logements from "../logements.json";
import { useNavigate } from "react-router-dom";
import "app/styles/card.sass";

function Card() {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/appartments/${id}`);
  };
  return (
    <div className="card-container">
      {logements.map((logement) => (
        <div key={logement.id} className="card" onClick={() => handleCardClick(logement.id)}>
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
