import React from 'react';
import { Navbar } from '@components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="hero">
        <img className="hero__image" src="./heroImg.svg" alt="" />
        <div className="hero__texts">
          <h3 className="hero__pre-intro">Hi !</h3>
          <h1 className="hero__intro">
            I&apos;m Adarsh Mohan. a Front End Developer
          </h1>
          <p className="hero__description">
            Front End Developer based in India. I am coding with a clean and
            beautiful problem-solving mind
          </p>
        </div>
      </section>
    </main>
  );
}
