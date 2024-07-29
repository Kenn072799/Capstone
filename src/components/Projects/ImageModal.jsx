import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const ImageModal = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'ArrowRight':
          nextSlide();
          break;
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]); // Re-run effect if modal open state changes

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white p-2"
        >
          <AiOutlineClose size={20}/>
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="max-w-full max-h-screen rounded-2xl"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded-full"
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