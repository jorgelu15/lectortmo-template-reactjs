const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="about-site">
          <h2>Sitio</h2>
          <a>Sobre TuMangaOnline</a>
          <a>Preguntas Frecuentes</a>
          <a>Manual de Uso</a>
          <a>Colaborar</a>
          <a>Normas de la comunidad</a>
          <a>Terminos de uso</a>
          <a>Politica de privacidad</a>
          <a>Cookies</a>
          <a>Contacto</a>
          <a>Privacy Settings</a>
        </div>
        <div className="explore">
          <h2>Explorar</h2>
          <a>Biblioteca</a>
          <a>Grupos</a>
          <a>Listas</a>
        </div>
        <div className="footer-content">
          <h2>Contenidos</h2>
          <p>
            Tumangaonline no realiza las traducciones aquí realizadas y solo es
            un repositorio con visor propio para que distintos grupos de
            traducción puedan compartir sus propios proyectos de forma pública y
            organizada para el disfrute de todos.
          </p>
          <p>
            This site is protected by reCAPTCHA and the Google <a>Privacy Policy </a>
            and <a>Terms of Service</a> apply.
          </p>
          <h2>Social</h2>
          <span style={{background: '#4a77ef', padding: 10, width: 40, textAlign: 'center', marginBottom: 16}}>F</span>
          <p>&copy; 2014 - 2022 TuMangaOnline - F31</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
