import React, { useState } from 'react';
import './gameSlider.css';

const GameSlider = () => {
 const [currentImage, setCurrentImage] = useState("src/assets/slider-img1.jpg");

 const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
 };

 const getActiveClass = (imageSrc) => {
    return currentImage === imageSrc ? 'active' : '';
 };

 return (
    <div className='game-slider'>
      <div className='game-slider__big-image'>
        <img src={currentImage} alt="main-image" />
      </div>
      <div className='game-slider__small-images'>
        <img src="src/assets/slider-img1.jpg" alt="minor-image1" className={getActiveClass("src/assets/slider-img1.jpg")} onClick={() => handleImageClick("src/assets/slider-img1.jpg")} />
        <img src="src/assets/slider-img2.jpg" alt="minor-image2" className={getActiveClass("src/assets/slider-img2.jpg")} onClick={() => handleImageClick("src/assets/slider-img2.jpg")} />
        <img src="src/assets/slider-img4.jpg" alt="minor-image3" className={getActiveClass("src/assets/slider-img4.jpg")} onClick={() => handleImageClick("src/assets/slider-img4.jpg")} />
        <img src="src/assets/slider-img5.jpg" alt="minor-image4" className={getActiveClass("src/assets/slider-img5.jpg")} onClick={() => handleImageClick("src/assets/slider-img5.jpg")} />
        <img src="src/assets/slider-img6.jpg" alt="minor-image5" className={getActiveClass("src/assets/slider-img6.jpg")} onClick={() => handleImageClick("src/assets/slider-img6.jpg")} />
        <img src="src/assets/slider-img7.jpg" alt="minor-image6" className={getActiveClass("src/assets/slider-img7.jpg")} onClick={() => handleImageClick("src/assets/slider-img7.jpg")} />
      </div>
    </div>
 );
};

export default GameSlider;
