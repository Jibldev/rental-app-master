import "app/styles/notfound.sass";
import Header from "../components/header";
import Footer from "../components/footer";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <Header />
      <div className="not-found">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/" className="home-link">
          Retour sur la page d'accueil
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
