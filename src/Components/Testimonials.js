import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 768, // breakpoint from window width in px
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };
    

  return (
    <section id="testimonials">
    <h2>What Our Customers Say</h2>
    <Slider {...settings}>
      <div className="testimonial-item">
        <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400" alt="Customer 1" />
        <p>"This platform changed the way we do business! Highly recommended."</p>
      </div>
      <div className="testimonial-item">
     
        <img src="https://images.unsplash.com/photos/black-haired-man-making-face-sibVwORYqs0" alt="Customer 2" />
        <p>"Fantastic user experience. It's intuitive and easy to use."</p>
      </div>
      <div className="testimonial-item">
        <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c6e?w=400" alt="Customer 3" />
        <p>"Support is top-notch. They resolved our issue in no time!"</p>
      </div>
      <div className="testimonial-item">
        <img src="https://images.unsplash.com/photo-1559933240-941267e15079?w=400" alt="Customer 4" />
        <p>"I'm delighted with the consistent updates and new features."</p>
      </div>
      <div className="testimonial-item">
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400" alt="Customer 5" />
        <p>"Truly a game-changer for our team. Efficiency went through the roof!"</p>
      </div>
    </Slider>
  </section>

  );
}

export default Testimonials;
