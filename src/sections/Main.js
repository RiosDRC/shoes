import { shoes } from "../assets/"
import { useState } from "react";

const Main = () => {
    const [facebook, setFacebook ] = useState(false)
    const [instagram, setInstagram ] = useState(false)
    const [twitter, setTwitter ] = useState(false)
    const [ linkedIn, setLinkedIn ] = useState(false)

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
                    <img src={shoes} alt="" />
                </div>
            </div>
            <div className="mainSocial">
                <i className={`fa-brands fa-facebook-f ${facebook ? 'fa-bounce' : ''}`} onMouseOver={()=>{setFacebook(true)}} onMouseLeave={()=>{setFacebook(false)}}/>
                <i className={`fa-brands fa-instagram ${instagram ? 'fa-bounce' : ''}`} onMouseOver={()=>{setInstagram(true)}} onMouseLeave={()=>{setInstagram(false)}}/>
                <i className={`fa-brands fa-twitter ${twitter ? 'fa-bounce' : ''}`} onMouseOver={()=>{setTwitter(true)}} onMouseLeave={()=>{setTwitter(false)}}/>
                <i className={`fa-brands fa-linkedin-in ${linkedIn ? 'fa-bounce' : ''}`} onMouseOver={()=>{setLinkedIn(true)}} onMouseLeave={()=>{setLinkedIn(false)}}/>
            </div>
            <div className="mainButton">
                <a href='#Products' >SHOP NOW</a>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    );
}
 
export default Main;