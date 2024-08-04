import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ImageModal = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      switch (e.key) {
        case "ArrowRight":
          nextSlide();
          break;
        case "ArrowLeft":
          prevSlide();
          break;
        case "Escape":
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    setLoading(true);
    const img = new Image();
    img.src = images[currentIndex];
    img.onload = () => setLoading(false);
  }, [currentIndex, images]);

  if (!isOpen) return null;

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchStartX.current - touchEndX.current < -50) prevSlide();
  };

  const handleTouchStart = (e) => (touchStartX.current = e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="fixed inset-0 bg-black bg-opacity-90" onClick={onClose}>
        <button className="absolute top-2 right-2 text-white p-2">
          <AiOutlineClose size={30} className="opacity-75" />
        </button>
      </div>
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {loading && (
            <span className="loading loading-spinner loading-lg"></span>
        )}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`relative max-w-full max-h-screen rounded-2xl ${loading ? 'hidden' : 'block'}`}
          onLoad={() => setLoading(false)}
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2 px-4 md:py-4 md:px-6 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2 px-4 md:py-4 md:px-6 rounded-full"
        >
          ❯
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;