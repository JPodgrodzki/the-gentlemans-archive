import './vademecum.css';
import collars from '../../assets/images/vademecum/collars.PNG';

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
                <div className="article__photo"></div>
                <div className="article__title">
                    Suits
                </div>
            </div>
            <div className="article">
                <div className="article__photo"></div>
                <div className="article__title">
                    Hats
                </div>
            </div>
            <div className="article">
                <div className="article__photo"></div>
                <div className="article__title">
                    Coats
                </div>
            </div>
            <div className="article">
                <div className="article__photo"></div>
                <div className="article__title">
                    Gallantry
                </div>
            </div>
            <div className="article">
                <div className="article__photo"></div>
                <div className="article__title">
                    Jewellery
                </div>
            </div>
            <div className="article">
                <div className="article__photo"></div>
                <div className="article__title">
                    Accessories
                </div>
            </div>
            <div className="article">
                <div className="article__photo"></div>
                <div className="article__title">
                    Shoes
                </div>
            </div>
            <div className="article">
                <div className="article__photo"></div>
                <div className="article__title">
                    Watches
                </div>
            </div>
            <div className="article">
                <div className="article__photo"></div>
                <div className="article__title">
                    Bags
                </div>
            </div>
        </div>
    )
}