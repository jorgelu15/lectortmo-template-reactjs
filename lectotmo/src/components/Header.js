import { Link } from "react-router-dom";
import routers from "../helper/Routers";

const Header = () => {
  return (
    <header class="container">
      <nav class="navbar">
        <div class="main-menu">
          <Link to={routers.home}>
            tu<b>manga</b>
            <i>online</i>
          </Link>
          <Link to={routers.library}>biblioteca</Link>
          <Link to={routers.groups}>grupos</Link>
          <Link href="">listas</Link>
          <Link href="">foro</Link>
        </div>
        <div class="main-menu">
          <form autocomplete="off">
            <div>
              <input type="search" placeholder="Buscar..." name="q" id="q" />
            </div>
          </form>
          <Link to={routers.login}>acceder</Link>
          <Link to={routers.logUp}>registrar</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
