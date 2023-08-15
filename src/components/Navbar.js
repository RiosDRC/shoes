import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import FavWindow from "./FavWindow";
import CartWindow from "./CartWindow";
import UserWindow from "./UserWindow";

const Navbar = () => {
    const { userChoices, isFavVisible, setIsFavVisible, isCartVisible, setIsCartVisible, isUserVisible, setIsUserVisible } = useContext(DataContext);

    return (
    <nav className="navbar navbar-expand-sm fixed-top">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a href="/" id="logo" className="navbar-brand justify-content-start">
                <h1>Shoe<span>s</span></h1>
            </a>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#Home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Review">Review</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Services">Services</a>
                    </li>
                </ul>
            </div>
            <div className="icons-box">
                <div className="icons-boxCard" onClick={() => {setIsFavVisible(prev=>!prev); setIsCartVisible(false); setIsUserVisible(false)}}>
                    <i className="fa-solid fa-heart"/>
                    {userChoices.fav.length > 0
                    ? <h4>{userChoices.fav.length}</h4>
                    : null}
                </div>
                <div className="icons-boxCard" onClick={() => {setIsCartVisible(prev=>!prev); setIsFavVisible(false); setIsUserVisible(false)}}>
                    <i className="fa-solid fa-cart-shopping"/>
                    {userChoices.onCart.length > 0
                    ? <h4>{userChoices.onCart.length}</h4>
                    : null}
                </div>
                <div className="icons-boxCard"  onClick={() => {setIsUserVisible(prev=>!prev); setIsFavVisible(false); setIsCartVisible(false)}}>
                    <i className="fa-solid fa-user"/>
                </div>
            </div>
        </div>
        {isFavVisible
        ? <FavWindow/>
        : null
        }
        {isCartVisible
        ? <CartWindow/>
        : null
        }
        {isUserVisible
        ? <UserWindow/>
        : null
        }
    </nav>
    );
}
 
export default Navbar;