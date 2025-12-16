import './details.css';
import close from '../../../assets/images/close.png';

export const Details = ({ activeImage=null, setActiveImage }) => {
    return (
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
            <div className="title">
              {activeImage?.title}
            </div>
            <div className="line"></div>
            <div className="description">
              {activeImage?.description}
            </div>
            <div className="line"></div>
            <div className="items">
              Items in this photo:
            </div>
          </div>
        </div>
    )
}