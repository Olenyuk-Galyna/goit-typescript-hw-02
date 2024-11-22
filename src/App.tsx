import { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal, { ImageValue } from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { findImages } from "./api/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Image } from "./types";

type ApiResponse = { results: Image[]; total: number; total_pages: number };
function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean | string>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<null | ImageValue>(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchImages() {
      setIsLoading(true);
      try {
        const data: ApiResponse = await findImages(query, page);
        console.log(data);
        setImages((previmages) => [...previmages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setErrorMessage((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const openModal = (image: ImageValue): void => {
    if (image) setModalImage(image);
    setIsOpen(true);
  };
  const closeModal = (): void => {
    setModalImage(null);
    setIsOpen(false);
  };

  const handleSubmit = (query: string): void => {
    setQuery(query);
  };

  const handleClick = (): void => {
    setPage((prevpage) => prevpage + 1);
  };
  return (
    <>
      <div>
        {isLoading && <Loader />}
        {errorMessage && <ErrorMessage />}
        <SearchBar onSubmit={handleSubmit} />
        <ImageGallery images={images} openModal={openModal} />
        <ImageModal
          openModal={modalIsOpen}
          imageModal={modalImage}
          closeModal={closeModal}
        />
        {page < totalPages && <LoadMoreBtn onClick={handleClick} />}
        <Toaster />
      </div>
    </>
  );
}

export default App;
