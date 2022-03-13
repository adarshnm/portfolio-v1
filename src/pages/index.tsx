import React from 'react';
import Navbar from '@components/Navbar';
import Title from '@components/Title';
import PASSIONS from '@constants/passions.constants';
import PassionsCard from '@components/PassionsCard';
import SEO from '@/components/SEO';
import ProjectCard from '@/components/ProjectCard';
import CONTACTS from '@/constants/contact.constants';
import ContactCard from '@/components/ContactCard';

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
      <section className="container projects" id="portfolio">
        <Title lightHeading="My" darkHeading="Portfolio" />
        <div className="passions__container">
          {PASSIONS.map((passion) => (
            <ProjectCard key={passion.trivialTitle} />
          ))}
        </div>
      </section>
      <section className="container contact" id="contact">
        <Title lightHeading="Contact" darkHeading="Me" />
        <div className="passions__container">
          {CONTACTS.map((contact) => (
            <ContactCard contact={contact} />
          ))}
        </div>
      </section>
    </main>
  );
}
