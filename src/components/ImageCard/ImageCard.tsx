import { Image } from "../../types";

type ImageCardProps = {
  image: Image;
  openModal: (arg: { src: string; alt: string }) => void;
};
function ImageCard({ image, openModal }: ImageCardProps) {
  const handleClick = () => {
    openModal({ src: image.urls.regular, alt: image.alt_description });
  };
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageCard;
