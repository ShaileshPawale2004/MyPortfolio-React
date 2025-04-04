import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Recent Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="/images/portfolio/portfolio-1.jpg" alt="Project 1" />
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="/images/portfolio/portfolio-2.jpg" alt="Project 2" />
              </div>
            </div>
          </div>
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="/images/portfolio/portfolio-3.jpg" alt="Project 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
