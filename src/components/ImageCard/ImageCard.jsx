const ImageCard = ({ url }) => {
  return (
    <div>
      <a href={url.regular}>
        <img src={url.small} alt="" />
      </a>
      <p></p>
    </div>
  );
};

export default ImageCard;
