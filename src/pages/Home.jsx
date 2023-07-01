import About from "../sections/About";
import Main from "../sections/Main";
import Products from "../sections/Products";
import Navbar from "../components/Navbar"
import Review from "../sections/Review";
import Services from "../sections/Services";
import Login from "../sections/Login";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="content">
                <Main />
                <Products />
                <About />
                <Review />
                <Services />
                <Login />
            </div>
            <Footer />
        </>
    );
}
 
export default Home;