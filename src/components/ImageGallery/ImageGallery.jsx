import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {photos.map(({ id, urls }) => {
        return (
          <li key={id}>
            <ImageCard url={urls} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
