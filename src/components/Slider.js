import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1  from '../Images/healthy-lifestyle-1.jpg';
import img2 from '../Images/oldlady_yogaPose1.jpg';
import img3 from '../Images/Healthy_Life_wrds.png';
 import '../css/Slider.css';

function Slider() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (

    <div className='corusl'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000}>
        <img
           className="d-block w-100"
          id='i1'
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
            className="d-block w-100"
          id='i2'
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
            className="d-block w-100"
          id='3'
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
           className="d-block w-100"
          src='https://imgeng.jagran.com/images/2023/feb/benefitsofmeditation1677234679300.jpg'
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
           className="d-block w-100"
          src='https://images.squarespace-cdn.com/content/v1/5d9f65d12a10d4166969add0/1593122106684-XBI014JKWK3ONFIJGD47/yoga+for+seniors+1.jpeg?format=1500w'
          alt="fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Slider;