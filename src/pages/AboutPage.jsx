import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <h1 className="text-center display-5 fw-bold">About Us</h1>
        <hr className="w-25 mx-auto mb-4" />

        <p className="lead text-center text-muted px-3 px-md-5">
          Welcome to NovaStyles — where innovation meets design. We specialize in fashion, elegance, and cutting-edge tech that helps you express yourself and live better.
        </p>

        <p className="text-center text-muted px-3 px-md-5">
          With a passion for curated experiences, we deliver stylish essentials for men and women, standout jewelry, and modern electronics — all under one roof. Join thousands of happy customers who trust us for quality and taste.
        </p>

        <h2 className="text-center py-5">Explore Our Categories</h2>

        <div className="row g-4">
          {[
            {
              title: "Men's Clothing",
              img: "https://img.freepik.com/free-vector/hand-drawn-winter-clothes-essentials_52683-49233.jpg?semt=ais_hybrid&w=740",
            },
            {
              title: "Women's Clothing",
              img: "https://img.freepik.com/premium-photo/portrait-smiling-friends-standing-against-wall_1048944-21718828.jpg",
            },
            {
              title: "Jewelry",
              img: "https://img.freepik.com/premium-photo/jewelry-photography_808279-2.jpg",
            },
            {
              title: "Electronics",
              img: "https://img1.wsimg.com/isteam/ip/5138d36c-e672-4e5c-90cf-d7f5871abcd1/motherboard-683247_1280.png",
            },
          ].map((product, idx) => (
            <div key={idx} className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm border-0 rounded-4 hover-card">
                <img
                  src={product.img}
                  className="card-img-top rounded-top-4"
                  alt={product.title}
                  height={180}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold">{product.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
