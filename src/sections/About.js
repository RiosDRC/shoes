import { useState } from "react";
import { Link } from "react-router-dom";
import { red_shoes1, red_shoes2, red_shoes3, red_shoes4 } from "../assets"

const About = () => {
    const [image, setImage] = useState(red_shoes1)

    const handleClick = (e)=>{
        setImage(e.target.currentSrc)
    }
    
    return (
        <div className="about" id="About">
            <h1>Web<span>About</span></h1>
            <div className="aboutContent">
                <div className="aboutImage">
                    <div className="aboutSmallImage">
                        <img src={red_shoes1} alt="" onMouseOver={handleClick}/>
                        <img src={red_shoes2} alt="" onMouseOver={handleClick}/>
                        <img src={red_shoes3} alt="" onMouseOver={handleClick}/>
                        <img src={red_shoes4} alt="" onMouseOver={handleClick}/>
                    </div>

                    <div className="imageContainer">
                        <img src={image} alt="" />
                    </div>
                </div>

                <div className="aboutText">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
                        of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
                        sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the
                        1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                        et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions
                        from the 1914 translation by H. Rackham.
                    </p>
                </div>
            </div>
            <Link to="#" className="aboutBtn">Shop Now</Link>
        </div>
    );
}
 
export default About;