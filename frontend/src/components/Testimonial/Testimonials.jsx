import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {
   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
      ],
   };

   return (
      <Slider {...settings}>
         <div className="testimonial py-4 px-3">
            <p>
               "Asridhi Tours & Travels made our dream vacation a reality! The entire trip was perfectly planned,
               from the stunning destinations to the hassle-free accommodations. Highly recommend their services!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
               <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
               <div>
                  <h6 className="mb-0 mt-3">John Doe</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>

         <div className="testimonial py-4 px-3">
            <p>
               "Thanks to Asridhi Tours & Travels, we experienced the trip of a lifetime. Their team was professional, 
               and they ensured every detail was taken care of. Can't wait for our next adventure!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
               <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
               <div>
                  <h6 className="mb-0 mt-3">Lia Franklin</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>

         <div className="testimonial py-4 px-3">
            <p>
               "We had an amazing experience with Asridhi Tours & Travels. Their customized packages and attention to detail 
               made our family vacation stress-free and unforgettable. Thank you for the incredible memories!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
               <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
               <div>
                  <h6 className="mb-0 mt-3">Emily Smith</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>

         <div className="testimonial py-4 px-3">
            <p>
               "Booking our honeymoon with Asridhi Tours & Travels was the best decision! From the romantic destinations 
               to the seamless planning, it was beyond our expectations. Thank you for an unforgettable experience!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
               <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
               <div>
                  <h6 className="mb-0 mt-3">Mark Johnson</h6>
                  <p>Customer</p>
               </div>
            </div>
         </div>
      </Slider>
   );
};

export default Testimonials;
