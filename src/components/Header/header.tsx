import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <span>Stylish</span>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/shopping'}>Shopping</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </nav>

            <div className="cart">
                <span className="material-symbols-outlined">person</span>
                <span className="material-symbols-outlined">search</span>
                <span className="material-symbols-outlined">shopping_cart</span>
            </div>
            
        </header>
    );

}

export default Header;
