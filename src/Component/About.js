import React from "react";

export const About = () => {
  return (
    <div>
      <h4 className="fw-semibold" style={{ borderBottom: "2px solid grey" }}>
        About Us
      </h4>
      <p>
        Welcome to yNotebook, your all-in-one digital notebook solution designed
        to help you stay organized, productive, and efficient. Built with the
        power of modern technology, our app combines a seamless user experience
        with powerful features to bring your ideas to life.
      </p>
      <br />
      <h5>Our Mission</h5>
      <p>
        At yNotebook, we aim to revolutionize how you capture, organize, and
        manage your thoughts. Whether you're jotting down quick notes,
        brainstorming ideas, or managing tasks, our app provides a reliable and
        user-friendly platform to make your life easier.
      </p>
      <br />
      <h6>Why Choose Us?</h6>
      <br />
      <ol>
        <li>
          Fast & Responsive: Built with React for smooth, lightning-fast
          performance.
        </li>
        <br />
        <li>
          Full-Stack Reliability: Powered by a robust backend to keep your notes
          safe and always accessible.
        </li>
        <br />
        <li>
          User-Centric Design: Intuitive interfaces tailored for simplicity and
          ease of use.
        </li>
      </ol>
    </div>
  );
};

export default About;
