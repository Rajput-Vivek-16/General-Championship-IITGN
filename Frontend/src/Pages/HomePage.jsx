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
    const slideImages = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9,
        img10, img11, img12, img13, img14, img15, img16, img17, img18,
        img19, img20, img21, img22, img23, img24, img25, img26, img27,
    ];

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
                <div className="hero-badge">Sports Council, IIT Gandhinagar</div>
                <div className="sectionhead">IIT GANDHINAGAR'S</div>
                <div className="sectionmid">GENERAL CHAMPIONSHIP</div>
                <div className="sectionend">UNITE | COMPETE | CONQUER</div>
                <p className="hero-subtext">
                    Register your batch, build your squad, and compete across sports for glory.
                </p>
                <NavLink className="customButton" to="/register">Register Team</NavLink>
            </div>

            <div className="rightsection">
                <Slider {...settings}>
                    {slideImages.map((imageSrc, index) => (
                        <div key={index}>
                            <img
                                src={imageSrc}
                                alt={`Slide ${index + 1}`}
                                className="carousel-image"
                                loading={index === 0 ? "eager" : "lazy"}
                                decoding="async"
                                fetchPriority={index === 0 ? "high" : "auto"}
                            />
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
}

export default HomePage;
