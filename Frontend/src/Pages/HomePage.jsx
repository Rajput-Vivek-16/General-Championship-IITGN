import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
// import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/60.webp";
import img2 from "../assets/images/61.webp";
import img3 from "../assets/images/62.webp";
import img4 from "../assets/images/63.webp";
import img5 from "../assets/images/64.webp";
import img6 from "../assets/images/65.webp";
import img7 from "../assets/images/66.webp";
import img8 from "../assets/images/67.webp";
import img9 from "../assets/images/68.webp";
import img10 from "../assets/images/69.webp";
import img11 from "../assets/images/70.webp";
import img12 from "../assets/images/71.webp";
import img13 from "../assets/images/72.webp";
import img14 from "../assets/images/73.webp";
import img15 from "../assets/images/74.webp";
import img16 from "../assets/images/76.webp";
import img17 from "../assets/images/77.webp";
import img18 from "../assets/images/78.webp";
import img19 from "../assets/images/79.webp";
import img20 from "../assets/images/80.webp";
import img21 from "../assets/images/81.webp";
import img22 from "../assets/images/82.webp";
import img23 from "../assets/images/83.webp";
import img24 from "../assets/images/84.webp";
import img25 from "../assets/images/85.webp";
import img26 from "../assets/images/86.webp";
import img27 from "../assets/images/87.webp";

import { NavLink } from "react-router-dom";

function HomePage() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
        <div className="bgcontainer">
            <div className="leftsection">
                <div className="sectionhead">IIT GANDHINAGAR'S</div>
                <div className="sectionmid">GENERAL CHAMPIONSHIP</div>
                <div className="sectionend">UNITE | COMPETE | CONQUER</div>
                <NavLink className="customButton" to="/register">Register Now</NavLink>
            </div>

            <div className="rightsection">
                <Slider {...settings}>
                    <div>
                        <img src={img1} alt="Slide 1" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img2} alt="Slide 2" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img3} alt="Slide 3" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img4} alt="Slide 4" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img5} alt="Slide 5" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img6} alt="Slide 6" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img7} alt="Slide 7" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img8} alt="Slide 8" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img9} alt="Slide 9" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img10} alt="Slide 10" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img11} alt="Slide 11" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img12} alt="Slide 12" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img13} alt="Slide 13" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img14} alt="Slide 14" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img15} alt="Slide 15" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img16} alt="Slide 16" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img17} alt="Slide 17" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img18} alt="Slide 18" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img19} alt="Slide 19" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img20} alt="Slide 20" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img21} alt="Slide 21" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img22} alt="Slide 22" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img23} alt="Slide 23" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img24} alt="Slide 24" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img25} alt="Slide 25" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img26} alt="Slide 26" className="carousel-image" />
                    </div>
                    <div>
                        <img src={img27} alt="Slide 27" className="carousel-image" />
                    </div>

                </Slider>
            </div>
        </div>
    );
}

export default HomePage;
