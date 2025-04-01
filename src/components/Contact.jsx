import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-item-info padd-15">
            <div className="icon"><i className="fa fa-phone"></i></div>
            <h4>Call Me</h4>
            <p>+91 9448863977</p>
          </div>
          <div className="contact-item-info padd-15">
            <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
            <h4>Location</h4>
            <p>Belgaum, India</p>
          </div>
          <div className="contact-item-info padd-15">
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <p>shaileshpawale734@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="contact-form padd-15">
            <h3 className="contact-title">Send me a message</h3>
            <form>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-item col-6 padd-15">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <textarea className="form-control" placeholder="Message"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
