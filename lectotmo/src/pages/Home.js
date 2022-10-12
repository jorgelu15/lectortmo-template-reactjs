import Aside from "../components/Aside";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
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
