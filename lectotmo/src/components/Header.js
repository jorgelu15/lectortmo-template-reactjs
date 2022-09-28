const Header = () => {
  return (
    <header class="container">
      <nav class="navbar">
        <div class="main-menu">
          <a href="">
            tu<b>manga</b>
            <i>online</i>
          </a>
          <a href="">biblioteca</a>
          <a href="">grupos</a>
          <a href="">listas</a>
          <a href="">foro</a>
        </div>
        <div class="main-menu">
          <form autocomplete="off">
            <div>
              <input type="search" placeholder="Buscar..." name="q" id="q" />
            </div>
          </form>
          <a href="">acceder</a>
          <a href="">registrar</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
