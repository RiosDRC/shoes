import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerMain">
                <div className="tag">
                    <h1>Contact</h1>
                    <Link><i className="fa-solid fa-house"></i>Latin America</Link>
                    <Link><i className="fa-solid fa-phone"></i>+98 12 345 6789</Link>
                    <Link><i className="fa-solid fa-envelope"></i>contact@example.com</Link>
                </div>
                <div className="tag">
                    <h1>Get Help</h1>
                    <Link>FAQ</Link>
                    <Link>Shipping</Link>
                    <Link>Returns</Link>
                    <Link>Payment Options</Link>
                </div>
                <div className="tag">
                    <h1>Our Stores</h1>
                    <Link>Latin America</Link>
                    <Link>Argentina</Link>
                    <Link>Chile</Link>
                    <Link>Colombia</Link>
                </div>
                <div className="tagSocial">
                    <h1>Follow Us</h1>
                    <div className="socialIcons">
                        <Link><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link><i className="fa-brands fa-twitter"></i></Link>
                        <Link><i className="fa-brands fa-instagram"></i></Link>
                        <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                    </div>
                </div>
                <div className="tagSubscription">
                    <h1>Newsletter</h1>
                    <input type="text" placeholder="Your email here"/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;