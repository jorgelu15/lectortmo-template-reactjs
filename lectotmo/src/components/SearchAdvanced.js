const SearchAdvanced = () => {
  return (
    <>
      <div className="searchAdvanced">
        <div className="search-filter">
          <form autoComplete="off">
            <input name="qa" placeholder="Buscar..." />
          </form>
          <select>
            <option>Titulo</option>
            <option>autor</option>
            <option>Compañia</option>
          </select>
          <button>Buscar</button>
        </div>
        <div className="filters">
          <div>
            <label>Ordenar por</label>
            <select>
              <option>Me gusta</option>
              <option>Puntuacion</option>
              <option>Alfabetico</option>
              <option>Creacion</option>
              <option>Fecha de Estreno</option>
              <option>Num. Capitulos</option>
            </select>
          </div>
          <div>
            <select>
              <option>ASC</option>
              <option>DESC</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchAdvanced;
