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
                        <a className="nav-link" href="#Home"a>Home</a>
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