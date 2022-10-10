import foto from '../img/foto1.jpg';

const CardFounded = () => {
  return (
    <a class="card-mangasFounded">
      <div class="title-card__mangasFounded">
        <p>Shuumatsu no Valkire</p>
      </div>
      <img src={foto} />
      <div class="type-card__mangasFounded">
        <p>SEINEN</p>
      </div>
    </a>
  );
};

export default CardFounded;
