import Header from "../components/header";
import Dropdown from "app/components/reglesabout";
import Footer from "../components/footer";
import logements from "../logements.json";
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
      <Header />
      <div className="container-lgmt">
        <title>{logement.title}</title>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
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
