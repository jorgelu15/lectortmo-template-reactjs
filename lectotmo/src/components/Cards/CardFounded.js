const CardFounded = ({manga, ...props}) => {
  return (
    <a class="card-mangasFounded">
      <div class="title-card__mangasFounded">
        <p>{manga.name}</p>
      </div>
      <img src={manga.thumb} />
      <div class="type-card__mangasFounded">
        <p>{manga.type}</p>
      </div>
    </a>
  );
};

export default CardFounded;
