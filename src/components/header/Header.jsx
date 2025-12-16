import logo from '../../assets/images/logo.png';
import './header.css';
import { IoMdMenu, IoMdSearch, IoMdClose  } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Header = ({ year, setYear, menuOpen, setMenuOpen }) => {
    const decade = Math.floor(year / 10) * 10;

    const handleSwitch = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <div className="header">
            <Link to='/' className="logo">
                <img src={logo} alt="" className='logo__img' />
            </Link>
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
            <div className="trinkets">
                <div className="icon">
                    <IoMdSearch className='iconImg' />
                </div>
                <div className="icon" onClick={handleSwitch}>
                    {menuOpen ? (
                        <IoMdClose className='iconImg' />
                    ) : (
                        <IoMdMenu className='iconImg' />
                    )}
                </div>
            </div>
        </div>
    )
}
