import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {

    return (
        <footer>
            <div className='footer_content'>
                <div className="links">
                    <h3>Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/shop">Shopping</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="Customer_Service">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Contact</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Returns & Refunds</Link></li>
                        <li><Link to="#">Delivery Information</Link></li>
                    </ul>
                </div>

                <div className="Contact_Us">
                    <h3>Contact Us</h3>
                    <p>Any questions? visit us at <b>services@stylish.com</b></p>
                </div>

                <div className="Social_Media">
                    <h3>Social Media</h3>
                    <ul>
                        <li><Link to="#">Facebook</Link></li>
                        <li><Link to="#">Instagram</Link></li>
                        <li><Link to="#">Twitter</Link></li>
                    </ul>
                </div>
            </div>

            <div className='footer_copyright'>
                <p>© 2023 Stylish. All Rights Reserved.</p>
            </div>
        </footer>
    )

}

export default Footer;