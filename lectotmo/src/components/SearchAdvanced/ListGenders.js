import { Genders } from "../../data/Genders";
const ListGenders = (props) => {
  const { open } = props;
  return (
    <div
      className={open ? "genders slideGenderOpen" : "genders slideGenderClose"}
      style={open ? { display: "flex" } : { display: "none" }}
    >
      <h3>Mangas por género:</h3>
      <ul>
        {Genders.map((gender) => (
          <li>
            <a>{gender}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGenders;
