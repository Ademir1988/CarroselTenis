import { useEffect, useState, useRef } from 'react';
import './App.css';
import shoes from '../src/shoes.json'
import RightChevron from '../src/images/Right_chevron_icon.png'
import Logo from '../src/images/super-shoes.png'

function App() {
  {/* const [data, setData] = useState([]);*/}
  const carousel = useRef(null);
  
 {/* useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []); */}

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  {/*if (!data || !data.length) return null;*/}

  return (
    
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="Super Shoes Logo" />
      </div>
      <div className="carousel" ref={carousel}>
        {shoes.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">U$ {oldPrice}</span>
                <span className="price">U$ {price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src={RightChevron} alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src={RightChevron} alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default App;
