const Services = () => {
    return (
        <div className="services" id="Services">
            <h1>Our<span>Services</span></h1>

            <div className="servicesCards">
                <div className="servicesBox">
                    <i className="fa-solid fa-truck-fast fa-fade"></i>
                    <h3>Fast Delivery</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className="servicesBox">
                    <i className="fa-solid fa-rotate-left fa-spin fa-spin-reverse"></i>
                    <h3>10 days replacement</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className="servicesBox">
                    <i className="fa-solid fa-headset fa-shake"></i>
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Services;