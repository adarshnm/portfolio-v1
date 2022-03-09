import React from 'react';
import Navbar from '@components/Navbar';
import Title from '@components/Title';
import PASSIONS from '@/constants/passions.constants';
import PassionsCard from '@/components/PassionsCard';
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <main>
      <SEO />
      <Navbar />
      <section className="hero container" id="hero">
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
      <section className="container passions" id="passions">
        <Title lightHeading="Additional" darkHeading="Passions" />
        <div className="passions__container">
          {PASSIONS.map((passion) => (
            <PassionsCard key={passion.prominentTitle} passion={passion} />
          ))}
        </div>
      </section>
    </main>
  );
}
