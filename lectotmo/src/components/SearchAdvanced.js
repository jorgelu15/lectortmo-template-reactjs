import { useState } from "react";

const SearchAdvanced = () => {
  const filterLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0-9",
  ];
  const genders = [
    "Accion",
    "Artes Marciales",
    "Autos",
    "Aventura",
    "Colegial",
    "Comedia",
    "Cosas de la Vida",
    "Dementia",
    "Demonios",
    "Deportes",
    "Drama",
    "Ecchi",
    "Fantasia",
    "Harem",
    "Historico",
    "Josei",
    "Juegos",
    "Magia",
    "Mecha",
    "Militar",
    "Misterio",
    "Musica",
    "Niños",
    "Parodia",
    "Policial",
    "Psicologico",
    "Romance",
    "Samurai",
    "Sci-fi",
    "Seinen",
    "Shoujo",
    "Shoujo ai",
    "Shounen",
    "Shounen ai",
    "Sobrenatural",
    "Space",
    "Super Poderes",
    "Terror",
    "Thriller",
    "Vampiros",
    "Yaoi",
    "Yuri",
  ];
  const max = new Date().getFullYear();
  const min = max - 100;
  const years = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  
  const [openGender, setopenGender] = useState(false);

  return (
    <div className="search-advanced">
      <div className="search-alphabet">
        <div className="filter-letter">
          {filterLetter.map((letter) => (
            <a>{letter}</a>
          ))}
          <span onClick={() => setopenGender(!openGender)}>{openGender ? 'Cerrar' : 'Por género'}</span>
          <span>Por tipo</span>
        </div>
        <div>
          <form>
            <select>
              <option>ASC</option>
              <option>DESC</option>
            </select>
            <select>
              <option>Cualquiera</option>
              <option>En emision</option>
              <option>Finalizado</option>
              <option>Por estrenar</option>
            </select>
            <select>
              <option>Titulo</option>
              <option>Autor</option>
              <option>Compañia</option>
            </select>
            <select>
              {years.map((year) => (
                <option>{year}</option>
              ))}
            </select>
            <input type="submit" name="submit" value="FILTRAR" />
          </form>
        </div>
      </div>
      <div className={openGender ? "genders slideGenderOpen" : "genders slideGenderClose"} style={openGender ? {display: 'flex'} : {display: 'none'}}>
        <h3>Mangas por género:</h3>
        <ul>
          {genders.map((gender) => (
            <li>
              <a>{gender}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchAdvanced;
