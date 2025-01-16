import Header from "../components/header";
import Dropdown from "app/components/reglesabout";
import Footer from "../components/footer";
import logements from "../logements.json";
import StarRating from "../components/notation.js";
import Carousel from "../components/carousel";
import NotFound from "app/pages/notfound";
import { useParams } from "react-router-dom";
import "app/styles/appartments.sass";



function Appartments() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  if (!logement) {
    return <NotFound />;
  }
  return (
    <>
      <title>{logement.title}</title>
      <Header />
      <div className="container-lgmt">
        <div className="carou">
          <Carousel images={logement.pictures} />
        </div>
        <div className="infos">
          <div className="adds">
            <h1>{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <ul>
              {logement.tags.map((tag, index) => (
                <li key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="host">
            <div className="imgp">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture}></img>
            </div>
            <StarRating rating={logement.rating} />
          </div>
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
