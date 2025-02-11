import React from 'react';


function Aboutus() {
  return (
    <div className="container">
      <h1 className="heading">Welcome to the About Page</h1>
      
      <p className="paragraph">
        Our website is dedicated to providing the best user experience by offering
        high-quality content, tools, and services. We aim to help our visitors with
        useful information and engaging features. Whether you're here for the latest news,
        tutorials, or resources, we hope to meet all your needs.
      </p>

      <p className="paragraph">
        Our team is passionate about delivering value and continuously improving our platform.
        Thank you for visiting, and feel free to explore!
      </p>

      

      <section className="section">
        <h2 className="subheading">Our History</h2>
        <p className="paragraph">
          Founded in [Year], we started as a small project with a goal to offer top-notch resources and educational
          content. Over the years, we've expanded our offerings and built a dedicated community that shares our values.
          We are proud of how far we've come and excited for the future.
        </p>
      </section>

      <section className="section">
        <h2 className="subheading">Meet the Team</h2>
        <p className="paragraph">
          Our team is a diverse group of passionate professionals, including writers, designers, and developers. We
          all share a love for innovation, creativity, and helping others succeed. Here's a quick look at some of our
          key team members:
        </p>
        <ul className="list">
          <li><strong>Ratan</strong> - Founder & CEO</li>
          <li><strong>Swetha Naidu</strong> - Head of Content</li>
          <li><strong>Kalyani Vedantham</strong> - Lead Developer</li>ssss
        </ul>
      </section>

      
    </div>
  );
}

export default Aboutus;
