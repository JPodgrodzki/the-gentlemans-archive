import './vademecum.css';
import collars from '../../assets/images/vademecum/collars.PNG';
import accessories from '../../assets/images/vademecum/accessories.PNG';
import coats from '../../assets/images/vademecum/coats.PNG';
import hats from '../../assets/images/vademecum/hats.PNG';
import jewellery from '../../assets/images/vademecum/jewellery.PNG';
import shirts from '../../assets/images/vademecum/shirts.PNG';
import suits from '../../assets/images/vademecum/suits.PNG';
import watches from '../../assets/images/vademecum/watches.PNG';
import ties from '../../assets/images/vademecum/ties.PNG';
import shoes from '../../assets/images/vademecum/shoes.PNG';

export const Vademecum = ({ year }) => {
    return (
        <div className="vademecum">
            <div className="article">
                <div className="article__photo">
                    <img src={collars} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Collars
                </div>
            </div>
            <div className="article">
                <div className="article__photo">
                    <img src={ties} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Ties
                </div>
            </div>
            <div className="article">
                <div className="article__photo">
                    <img src={suits} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Suits
                </div>
            </div>
            <div className="article">
                <div className="article__photo">
                    <img src={shirts} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Shirts
                </div>
            </div>
            <div className="article">
                <div className="article__photo">
                    <img src={hats} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Hats & caps
                </div>
            </div>
            <div className="article">
                <div className="article__photo">
                    <img src={coats} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Coats
                </div>
            </div>
            <div className="article">
                <div className="article__photo">
                    <img src={jewellery} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Jewellery
                </div>
            </div>
            <div className="article">
                <div className="article__photo">
                    <img src={accessories} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Accessories
                </div>
            </div>
            <div className="article">
                <div className="article__photo">
                    <img src={shoes} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Shoes
                </div>
            </div>
            <div className="article">
                <div className="article__photo">
                    <img src={watches} alt="category" className='article__photo--img' />
                </div>
                <div className="article__title">
                    Watches
                </div>
            </div>
        </div>
    )
}