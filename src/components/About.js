import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="About">
      <h2>About ME</h2> 
      <p>"I'm a curious and passionate individual with a background in technology and a love for creativity. I enjoy designing user experiences and solving complex problems. In my free time, I explore nature, read books, and experiment with cooking. I believe in continuous growth and embrace opportunities for personal and professional development. Let's create something extraordinary together!"</p>
      <p>I Made This</p>
      <img src={image} alt="i made this" />
    </div>
  );
}

export default About;

