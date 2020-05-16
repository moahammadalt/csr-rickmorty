import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>About page here</h1>
      <br />
      <Link to="/">
        <h3>go to home page</h3>
      </Link>
    </div>
  );
}

export default About;