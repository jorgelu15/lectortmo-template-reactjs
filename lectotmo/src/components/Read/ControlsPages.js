import { Link } from "react-router-dom";

const ControlsPages = () => {
  return (
    <div className="controls-pages">
      <nav className="navbar">
        <div className="main-menu">
          <Link>
            tu<b>manga</b>
            <i>online</i>
          </Link>
          <Link>
            Kanojo, okarishimasu
          </Link>
          <select>
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default ControlsPages;
