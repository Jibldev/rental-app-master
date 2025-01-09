import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Banner
          backgroundImage="app/images/Banner1.png"
          text="Chez vous, partout et ailleurs"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
