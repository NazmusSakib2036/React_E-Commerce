import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  FaStar,
  FaUserCircle,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaCircle,
} from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Review = () => {
  const reviews = [
    {
      id: 1,
      author: 'Alice Wonderland',
      rating: 5,
      date: 'July 15, 2024',
      comment:
        'Absolutely love the products! The quality is top-notch and the delivery was super fast. Highly recommend this store to everyone!',
    },
    {
      id: 2,
      author: 'Bob The Builder',
      rating: 4,
      date: 'July 10, 2024',
      comment:
        'Good selection and fair prices. I had a small issue with my order, but customer service resolved it quickly and professionally. Very satisfied.',
    },
    {
      id: 3,
      author: 'Charlie Chaplin',
      rating: 5,
      date: 'July 8, 2024',
      comment:
        'Fantastic experience from start to finish. The website is easy to navigate, and the product descriptions are accurate. Will definitely be a returning customer.',
    },
    {
      id: 4,
      author: 'Diana Prince',
      rating: 3,
      date: 'July 1, 2024',
      comment:
        "Decent products, but shipping took a bit longer than expected. Overall, an okay experience. Might order again if I'm not in a hurry.",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? 'text-warning me-1' : 'text-secondary me-1'}
      />
    ));
  };

  // Custom Arrows
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next d-none d-md-block" onClick={onClick}>
        <FaArrowCircleRight size={30} className="text-primary" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev d-none d-md-block" onClick={onClick}>
        <FaArrowCircleLeft size={30} className="text-primary" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div>
        <FaCircle size={12} className="text-warning" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false, // hide arrows on mobile
        },
      },
    ],
  };

  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <h2 className="text-center mb-5">What Our Customers Say</h2>
          {reviews.length > 0 ? (
            <Slider {...settings}>
              {reviews.map((review) => (
                <div key={review.id} className="px-2 py-3 d-flex justify-content-center align-items-stretch">
                  <div className="card shadow-sm h-100 border-0">
                    <div className="card-body d-flex flex-column gap-3">
                      <div className="d-flex align-items-center">
                        <FaUserCircle size={36} className="text-primary me-3" />
                        <div>
                          <h5 className="card-title mb-0">{review.author}</h5>
                          <small className="text-muted">{review.date}</small>
                        </div>
                      </div>
                      <div>{renderStars(review.rating)}</div>
                      <p className="card-text text-muted fst-italic small">
                        <FaQuoteLeft className="me-2 text-info" size={12} />
                        {review.comment}
                        <FaQuoteRight className="ms-2 text-info" size={12} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-center py-5">
              <p className="lead">No reviews yet. Be the first to share your experience!</p>
              <Link to="/product" className="btn btn-primary mt-3">
                <FaArrowLeft className="me-2" /> Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
