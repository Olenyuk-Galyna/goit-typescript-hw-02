import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../types";

type ImageGalleryProps = {
  images: Image[];
  openModal: (arg: { src: string; alt: string }) => void;
};

function ImageGallery({ images, openModal }: ImageGalleryProps) {
  return (
    <div>
      <ul className={css.list}>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ImageGallery;
