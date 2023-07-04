import { Link } from "react-router-dom";
const handleClick = (id) =>{
    const section = document.getElementById(id)
    section.scrollIntoView({behavior: 'smooth'})
}

const Navbar = () => {
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
                        <Link className="nav-link" to="#Home" onClick={()=>handleClick("Home")}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#Products" onClick={()=>handleClick("Products")}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#About" onClick={()=>handleClick("About")}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#Review" onClick={()=>handleClick("Review")}>Review</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#Services" onClick={()=>handleClick("Services")}>Services</Link>
                    </li>
                </ul>
            </div>
            <div className="icons">
                <i className="fa-solid fa-heart"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
    </nav>
    );
}
 
export default Navbar;