const Card = ({manga, ...props}) => {

  return (
    <a class="card-hottest">
      <div class="title-card__hottest">
        <p>{manga.name}</p>
      </div>
      <img src={manga.thumb} />
      <div class="type-card__hottest">
        <p>{manga.type}</p>
      </div>
    </a>
  );
};

export default Card;
