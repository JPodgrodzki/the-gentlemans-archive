import React, { useState, useMemo } from 'react';
import './home.css';
import logo from '../../assets/images/logo.png';
import close from '../../assets/images/close.png';
import imagesData from '../../assets/database/database.json';

const imageContext = require.context('../../assets/database/images', false, /\.(jpe?g|png|svg|webp)$/i);

const imageMap = imageContext.keys().reduce((map, key) => {
    const fileName = key.replace('./', '');
    map[fileName] = imageContext(key);
    return map;
}, {});

export const Home = () => {
  const [year, setYear] = useState(1900);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState(['fashionplate', 'photograph']);
  const [activeImage, setActiveImage] = useState(null);
  const decade = Math.floor(year / 10) * 10;

  const filteredImages = useMemo(() => {
    const imagesWithPaths = imagesData.map(item => ({
      ...item,
      image: imageMap[item.image] || null
    })).filter(item => item.image !== null);

    const filteredByDecade = imagesWithPaths.filter(image => {
        const imageDecade = parseInt(image.decade.replace('s', ''));
        return imageDecade === decade;
    });

    return filteredByDecade.filter(image => {
      return activeFilters.includes(image.type);
    })
  }, [decade, activeFilters]);

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
            <div className="type">
              <div className="option" onClick={() => handleActive('fashionplate')}>
                <div className={`box ${activeFilters.includes('fashionplate') ? 'box-active' : ''}`}></div>
                <div className="name">fashionplate</div>
              </div>
              <div className="option" onClick={() => handleActive('photograph')}>
                <div className={`box ${activeFilters.includes('photograph') ? 'box-active' : ''}`}></div>
                <div className="name">photograph</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className={`images ${activeImage && 'images-shrink'}`} key={decade}>
          {filteredImages.map(image => {
            return (
              <div key={image.id} className="image" onClick={() => setActiveImage(image)}>
                <img src={image.image} alt="" className='item' />
              </div>
            )
          })}
        </div>
        <div className={`details ${activeImage && 'details-active'}`}>
          <div className="details__photo">
            <img src={activeImage?.image} alt="" className='details__img' />
          </div>
          <div className={`close ${activeImage && 'close-active'}`} onClick={() => setActiveImage(null)}>
            <img src={close} alt="" className='close__sign' />
          </div>
          <div className="details__info">
            <div className="date">
              <div className="year">
                Year: {activeImage?.year}
              </div>
              <div className="decade">
                Decade: {activeImage?.decade}
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
