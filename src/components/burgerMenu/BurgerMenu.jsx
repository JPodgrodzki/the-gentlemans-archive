import { Link } from 'react-router-dom';
import './burgerMenu.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const BurgerMenu = ({ menuOpen, setMenuOpen }) => {
    const handleClick = () => {
        setMenuOpen(false);
    }

    return (
        <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
            <div className="links">
                <Link to='/' className="link" onClick={handleClick}>Home</Link>
                <Link to='/vademecum' className="link" onClick={handleClick}>Vademecum</Link>
            </div>
            <div className="socials">
                <a href='https://www.instagram.com/james_borough?igsh=bmxjdDh3dm92c3ly' target='_blank' rel='noopener noreferrer' className="icon">
                    <FaInstagram className='iconImg' />
                </a>
                <a href='https://github.com/JPodgrodzki' target='_blank' rel='noopener noreferrer' className="icon">
                    <FaGithub className='iconImg' />
                </a>
                <a href='http://www.linkedin.com/in/jakub-podgrodzki-a98a4237b' target='_blank' rel='noopener noreferrer' className="icon">
                    <FaLinkedin className='iconImg' />
                </a>
            </div>
        </div>
    )
}