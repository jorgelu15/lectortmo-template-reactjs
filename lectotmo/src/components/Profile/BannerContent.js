const BannerContent = (props) => {
  const { name, thumb } = props;
  return (
    <div className="container-picture">
      <div className="banner-content">
        <img src={thumb} alt="aeaesf" />
        <p className="title-profile">{name}</p>
      </div>
    </div>
  );
};

export default BannerContent;
