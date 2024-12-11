import React from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const NewsLetter = () => {
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     {/* <h2>Subscribe now for the latest travel updates!</h2>
                     <p>Discover the best travel destinations, exclusive deals, and tips to make your journey unforgettable. Join our community of travel enthusiasts today.</p>
                     <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subscribe</button>
                     </div> */}
                     <p>We promise to deliver only the most exciting travel information straight to your inbox. Start your adventure now!</p>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="A male tourist with travel gear" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default NewsLetter;
