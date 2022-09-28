import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
        <Aside />
      </div>
      <Footer />
    </>
  );
};

export default Home;
