import Header from "../components/header";
import Dropdown from "app/components/reglesabout";
import Footer from "../components/footer";
import logements from "../logements.json";
import StarRating from "../components/notation.js"
import { useParams } from "react-router-dom";
import "app/styles/appartments.sass";



function Appartments() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <h1>Logement non trouvé</h1>; // Si aucun logement ne correspond
  }
  return (
    <>
      <title>{logement.title}</title>
      <Header />
      <div className="container-lgmt">
        <div className="infos">
          <h1>{logement.title}</h1>
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture}></img>
          </div>
        </div>
        <p className="location">{logement.location}</p>
        <div className="adds">
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <StarRating rating={logement.rating} />
        </div>
        <div className="drop-lgmt">
          <Dropdown title="Description" content={logement.description} />
          <Dropdown title="Équipements" content={logement.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Appartments;
