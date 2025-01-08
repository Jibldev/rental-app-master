import Header from "../components/header";
import Banner from "../components/banner";

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
    </>
  );
};

export default Home;
