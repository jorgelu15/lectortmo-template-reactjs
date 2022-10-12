const Card = ({file, ...props}) => {
  const cardStyle = {
    width: `${file.type == 'shounen' ? 24 : 16}%`,
  }
  return (
    <a className="card-hottest" style={cardStyle}>
      <div class="title-card__hottest">
        <p>{file.name}</p>
      </div>
      <img src={file.thumb} />
      <div class="type-card__hottest">
        <p>{file.type}</p>
      </div>
    </a>
  );
};

export default Card;
