import foto from '../img/foto1.jpg';

const Card = () => {
  return (
    <a class="card-hottest">
      <div class="title-card__hottest">
        <p>Shuumatsu no Valkire</p>
      </div>
      <img src={foto} />
      <div class="type-card__hottest">
        <p>SEINEN</p>
      </div>
    </a>
  );
};

export default Card;
