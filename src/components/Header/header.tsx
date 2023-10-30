import { Link, useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';
import { useContext} from 'react';
import './Header.css';

const Header = () => {

    const navigate = useNavigate();
    const { cart } : any = useContext(ShoppingContext);

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
                <div onClick={() => navigate('/basket')}>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <span className="cart_quantity">{cart.length}</span>
                </div>
                
            </div>
            
        </header>
    );

}

export default Header;
