import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Shailesh Pawale, an <span>Web Developer</span>
                </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa. Cupiditate sed quasi facilis quo maxime doloremque aut. Voluptatibus qui, dicta ut a iusto recusandae soluta consectetur obcaecati laudantium mollitia.
                  Cupiditate quo, deserunt aperiam eos soluta ullam consectetur dignissimos sint ratione neque natus sed aspernatur sequi alias reiciendis quos labore eius ab id harum officiis rem numquam. Aliquam, voluptates fuga.
                  Fugiat corrupti architecto unde, facere magnam, saepe eligendi sit, exercitationem officia delectus a! Provident, iste ad ratione illum fugit alias nemo. Facere dolor reprehenderit eius soluta dicta quam deleniti quos?
                  Obcaecati veniam eos ullam fuga odit, esse autem, et tempora deleniti cumque at iusto facere, voluptate eius mollitia soluta eum non molestias. Autem dolores esse rerum sit quia voluptates dolorem!
                  Delectus fugit amet minima ex suscipit ipsum, numquam repellat facere ea odit, in porro omnis possimus aliquid animi dignissimos debitis distinctio nihil exercitationem doloremque nobis, atque illo. Blanditiis, sunt facere.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      <strong>Birthday:</strong> <span>12 Jan 2004</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      <strong>Age:</strong> <span>20</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      <strong>Website:</strong> <span>www.domain.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      <strong>Email:</strong>{" "}
                      <span>shaileshpawale734@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      <strong>Degree:</strong> <span>CS Graduate</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      <strong>Phone:</strong> <span>+91 9448863977</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      <strong>City:</strong> <span>Belgaum</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      <strong>Freelance:</strong> <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className="buttons">
                  <a href="#" className="btn">
                    Download CV
                  </a>
                  <a href="#contact" className="btn hire-me">
                    Hire Me
                  </a>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  {[
                    { skill: "JavaScript", level: 86 },
                    { skill: "CSS", level: 66 },
                    { skill: "HTML", level: 96 },
                    { skill: "Bootstrap", level: 76 },
                  ].map((item, index) => (
                    <div className="skill-item padd-15" key={index}>
                      <h5>{item.skill}</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: `${item.level}%` }}
                        ></div>
                        <div className="skill-percent">{item.level}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="timeline-box">
                  <div className="timeline">
                    {[...Array(3)].map((_, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <FaGraduationCap size={20} style={{ marginRight: "8px", position: "relative", top: "3px" }} /> 
                          2013 - 2015
                        </h6>
                        <h4 className="timeline-title">
                          Graduation In Computer Science
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Magni molestias voluptas.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="timeline-box">
                  <div className="timeline">
                    {[...Array(3)].map((_, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="circle-dot"></div>
                        <h6 className="timeline-date">
                          <FaBriefcase size={20} style={{ marginRight: "8px", position: "relative", top: "3px" }} /> 
                          2013 - 2015
                        </h6>
                        <h4 className="timeline-title">
                          Graduation In Computer Science
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Magni molestias voluptas.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* End Education & Experience */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
