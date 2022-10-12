import { Link } from "react-router-dom";
import { Profiles } from "../data/Profiles";
import Header from "../components/Layout/Header";
import Cover from "../components/Profile/Cover";
import Footer from "../components/Layout/Footer";
import MainActions from "../components/Profile/MainActions";
import MyGroups from "../components/Profile/MyGroups";

const Profile = () => {
  return (
    <>
      <Header />
      <Cover cover={Profiles[0].cover}>
        <MainActions>
          <Link>Leidos</Link>
          <Link>Pendientes</Link>
          <Link>Siguiendo</Link>
          <Link>Favoritos</Link>
          <Link>Lo tengo</Link>
          <Link>Abandonado</Link>
        </MainActions>
      </Cover>
      <MyGroups></MyGroups>
      <Footer />
    </>
  );
};

export default Profile;
