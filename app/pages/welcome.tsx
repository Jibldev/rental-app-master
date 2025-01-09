import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import 'app/styles/app.sass';

const Home = () => {
  return (
    <>
      <div className="app">
        <Header />
        <main className="main-content">
          <Banner
            backgroundImage="app/images/Banner1.png"
            text="Chez vous, partout et ailleurs"
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
