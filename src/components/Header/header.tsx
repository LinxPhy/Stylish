import { Link, useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../../context/ShoppingContext';
import { useContext, useState } from 'react';
import './header.css';

const Header = () => {

    const navigate = useNavigate();
    const [menu, setMenu] = useState(false)
    const { cart }: any = useContext(ShoppingContext);

    return (
        <>
        <header className="header">
            <span><Link to={'/'}>Stylish</Link></span>
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


            <span className="hamburger material-symbols-outlined" onClick={() => setMenu(!menu)}>
                menu
            </span>



        </header>

{
        menu && (
            <div className='mobile-nav'>
                <ul>
                    <li onClick={() => {navigate('/');setMenu(!menu)}}>Home</li>
                    <li onClick={() => {navigate('/about');setMenu(!menu)}}>About</li>
                    <li onClick={() => {navigate('/shopping');setMenu(!menu)}}>Shopping</li>
                    <li onClick={() => {navigate('/contact');setMenu(!menu)}}>Contact</li>
                    <li>Profile</li>
                    <li>Search</li>
                    <li onClick={() => {navigate('/basket');setMenu(!menu)}}>Cart (Items - {cart.length})</li>
                </ul>
            </div>
        )
    }
    
    </>
    )
}

export default Header;
