import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="main" id="Home">
            <div className="main_content">
                <div className="mainText">
                    <h1>NIKE</h1>
                    <span>Collection</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.</p>
                </div>
                <div className="mainImage">
                    <img src="./image/shoes.png" alt="" />
                </div>
            </div>
            <div className="mainSocial">
                <i className="fa-brands fa-facebook-f fa-bounce"></i>
                <i className="fa-brands fa-instagram fa-bounce"></i>
                <i className="fa-brands fa-twitter fa-bounce"></i>
                <i className="fa-brands fa-linkedin-in fa-bounce"></i>
            </div>
            <div className="mainButton">
                <Link>SHOP NOW</Link>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    );
}
 
export default Main;