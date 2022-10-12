const GroupCard = (props) => {
  const { group } = props;
  return (
    <a class="card-hottest">
      <div class="title-card__hottest">
        <p>{group.name}</p>
      </div>
      <img src={group.thumb} />
      <div class="type-card__hottest">
        <p>{group.type}</p>
      </div>
    </a>
  );
};

export default GroupCard;
