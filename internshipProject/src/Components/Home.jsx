import "../CSS/Home.css";
import React from "react";
import img1 from './images/myicon.png'

function Home() {
  return (
    <div className="landingPage-container">
      <div className="content-field">
        <div className="text-field">
          <h1 id="main-text">
            See things beyond imagination, just one prompt away.
          </h1>
        </div>
        <div className="search-box-field">
          <form
            action="https://www.google.com/search"
            method="get"
            className="search-bar"
          >
            <input type="text" placeholder="enter image name.." name="q" />
            <button type="submit">
              <img src={img1} alt="search-logo" />
            </button>
          </form>
        </div>
        <div className="info-field-box">
          <div className="aboutUs-field">
            <h2 id="main-about-text">About Us</h2>
            <div className="info-text-content">
              <p>
                Welcome to AIArt where we transform words into visual
                experiences. Our innovative platform bridges the gap between
                text and imagery, allowing you to convert your ideas, stories,
                and messages into compelling visuals with just a few clicks.
              </p>
              <br />
              <p>
                At AIArt we believe in the power of creativity and technology
                working together. Our team is passionate about pushing the
                boundaries of what’s possible with digital media, providing
                tools that empower you to express yourself in entirely new ways.
                Whether you're looking to create artistic representations of
                your text, design stunning visuals for social media, or generate
                unique content for your projects, we’ve got you covered.
              </p>
              <br />
              <p>
                Our mission is to make design accessible to everyone, regardless
                of technical skills. With our user-friendly interface, you can
                easily bring your vision to life, making each image as unique as
                your words.
              </p>
              <br />
              <p>
                Join us in revolutionizing the way we communicate. At AI Art the
                possibilities are as limitless as your imagination.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*footer section*/}
      <footer className="footer"><p>&copy;2024 AIArT.All rights reserved.</p></footer>
    </div>
  );
}

export default Home;
