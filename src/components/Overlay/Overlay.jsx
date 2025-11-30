import './overlay.css';

export const Overlay = ({ menuOpen, setMenuOpen }) => {
    const handleClick = () => {
        setMenuOpen(false);
    }

    return (
        <div className={`overlay ${menuOpen && 'overlay-visible'}`} onClick={handleClick}>
        </div>
    )
}