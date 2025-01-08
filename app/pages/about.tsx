import Header from "../components/header";
import Banner from "../components/banner";
import Dropdown from "app/components/reglesabout";

const About = () => {
  return (
    <>
      <title>Kasa - À Propos</title>
      <Header />
      <div>
        <Banner backgroundImage="app/images/Banner2.png" text="" />

      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <Dropdown
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilitié totale. Les photos sont conformes aux logements, et toutes les informations sont réglièrement vérifiées par nos équipes."
          />
        </div>
        <div className="dropdown">
          <Dropdown
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
          />
        </div>
        <div className="dropdown">
          <Dropdown
            title="Service"
            content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          />
        </div>
        <div className="dropdown">
          <Dropdown
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </>
  );
};

export default About;
