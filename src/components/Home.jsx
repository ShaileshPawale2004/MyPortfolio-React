import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Shailesh Pawale</span>
            </h3>
            <h3 className="my-profession">
              I'm a{" "}
              <span className="typing">
                <Typewriter
                  words={["Web Designer", "Web Developer", "Graphic Designer", "YouTuber"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p>
              I'm a Web Designer with extensive experience. My expertise is in
              website design, graphic design, and more...
            </p>
            <a href="#contact" className="btn hire-me">
              Hire Me
            </a>
          </div>
          <div className="home-img padd-15">
            <img src="images/Formal_Photo.jpg" alt="Shailesh Pawale" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
