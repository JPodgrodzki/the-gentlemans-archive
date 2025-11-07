import React, { useState } from 'react';
import './home.css';
import logo from '../../assets/images/logo.png';
import images1850s from '../../assets/database/1850s/images.json';
import images1860s from '../../assets/database/1860s/images.json';
import images1870s from '../../assets/database/1870s/images.json';
import images1880s from '../../assets/database/1880s/images.json';
import images1890s from '../../assets/database/1890s/images.json';
import images1900s from '../../assets/database/1900s/images.json';
import images1910s from '../../assets/database/1910s/images.json';
import images1920s from '../../assets/database/1920s/images.json';
import images1930s from '../../assets/database/1930s/images.json';
import images1940s from '../../assets/database/1940s/images.json';
import close from '../../assets/images/close.png';

const decadeImageMap = {
  "1850": images1850s,
  "1860": images1860s,
  "1870": images1870s,
  "1880": images1880s,
  "1890": images1890s,
  "1900": images1900s,
  "1910": images1910s,
  "1920": images1920s,
  "1930": images1930s,
  "1940": images1940s
}

export const Home = () => {
  const [year, setYear] = useState(1900);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const decade = Math.floor(year / 10) * 10;
  const images = decadeImageMap[decade];

  const handleChange = (filtersOpen) => {
    setFiltersOpen(prev => !prev);
  }

  const handleActive = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(prev => prev.filter(option => option !== filter))
    } else {
      setActiveFilters(prev => [...prev, filter])
    }
  }

  return (
    <div className='home'>
      <div className="header">
        <div className="logo">
        <img src={logo} alt="" className='logo__img' />
        </div>
        <div className="slider">
          <input type="range" min="1850" max='1949' value={year} className='range' onChange={event => setYear(Number(event.target.value))} />
          <div className="time">
            <div className="year">
              Year: {year}
            </div>
            <div className="decade">
              Decade: {decade}s
            </div>
          </div>
        </div>
      </div>
      <div className={`filters ${filtersOpen ? 'filters__open' : ''}`}>
        <div className="container">
          <div className="breadscrumbs">
            <div className="arrow" onClick={() => handleChange(filtersOpen)}>
              {filtersOpen ? '<' : '>'}
            </div>
            <div className="active__filters">
              Active filters: 
              {activeFilters.map(filter => {
                return ` ${filter}`;
              })}
            </div>
          </div>
          <div className="form">
            <div className="formality">
              <div className="option" onClick={() => handleActive('formal')}>
                <div className={`box ${activeFilters.includes('formal') ? 'box-active' : ''}`}></div>
                <div className="name">formal</div>
              </div>
              <div className="option" onClick={() => handleActive('casual')}>
                <div className={`box ${activeFilters.includes('casual') ? 'box-active' : ''}`}></div>
                <div className="name">casual</div>
              </div>
              <div className="option" onClick={() => handleActive('workwear')}>
                <div className={`box ${activeFilters.includes('workwear') ? 'box-active' : ''}`}></div>
                <div className="name">workwear</div>
              </div>
              <div className="option" onClick={() => handleActive('leisure')}>
                <div className={`box ${activeFilters.includes('leisure') ? 'box-active' : ''}`}></div>
                <div className="name">leisure</div>
              </div>
            </div>
            <div className="hours">
              <div className="option" onClick={() => handleActive('morning')}>
                <div className={`box ${activeFilters.includes('morning') ? 'box-active' : ''}`}></div>
                <div className="name">morning</div>
              </div>
              <div className="option" onClick={() => handleActive('evening')}>
                <div className={`box ${activeFilters.includes('evening') ? 'box-active' : ''}`}></div>
                <div className="name">evening</div>
              </div>
            </div>
            <div className="season">
              <div className="option" onClick={() => handleActive('spring')}>
                <div className={`box ${activeFilters.includes('spring') ? 'box-active' : ''}`}></div>
                <div className="name">spring</div>
              </div>
              <div className="option" onClick={() => handleActive('summer')}>
                <div className={`box ${activeFilters.includes('summer') ? 'box-active' : ''}`}></div>
                <div className="name">summer</div>
              </div>
              <div className="option" onClick={() => handleActive('autumn')}>
                <div className={`box ${activeFilters.includes('autumn') ? 'box-active' : ''}`}></div>
                <div className="name">autumn</div>
              </div>
              <div className="option" onClick={() => handleActive('winter')}>
                <div className={`box ${activeFilters.includes('winter') ? 'box-active' : ''}`}></div>
                <div className="name">winter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className={`images ${activeImage && 'images-shrink'}`} key={decade}>
          {images.map(image => {
            return (
              <div className="image" onClick={() => setActiveImage(image)}>
                <img key={image} src={image} alt="" className='item' />
              </div>
            )
          })}
        </div>
        <div className={`details ${activeImage && 'details-active'}`}>
          <div className="details__photo">
            <img src={activeImage} alt="" className='details__img' />
          </div>
          <div className={`close ${activeImage && 'close-active'}`} onClick={() => setActiveImage(null)}>
            <img src={close} alt="" className='close__sign' />
          </div>
          <div className="details__info">
            <div className="date">
              <div className="year">
                Year: {year}
              </div>
              <div className="decade">
                Decade: {decade}s
              </div>
            </div>
            <div className="line"></div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facilis obcaecati recusandae, similique delectus amet voluptatum asperiores omnis doloribus, molestiae deserunt ad temporibus suscipit, ullam magni rerum fuga maxime minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum, doloremque quos commodi ipsum magni voluptatibus iste ex assumenda natus sed dicta minima temporibus dolore quibusdam consectetur earum totam eligendi tempora at modi dolorum? Ipsum vero nemo officia ad repellat eius nesciunt adipisci ab tenetur harum! Omnis exercitationem corporis quaerat.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
