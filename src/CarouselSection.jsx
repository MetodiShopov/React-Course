import React from 'react';
import Carousel from './Carousel';

const CarouselSection = (prop) => {
  const carouselItems = [

    // <div key={1}>Slide 1 Content</div>,
    // <div key={2}>Slide 2 Content</div>,
    // <div key={3}>Slide 3 Content</div>,

    <img src="./src/assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg" alt="image_one" />,
    <img src="./src/assets/joanna-kosinska-1_CMoFsPfso-unsplash.jpg" alt="image_two" />,
    <img src="./src/assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg" alt="image_three" />,
  ];

  return (
    <div>
      <h1>{prop.title}</h1>
      <Carousel items={carouselItems} />
    </div>
  );
};

export default CarouselSection;