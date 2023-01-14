import React from 'react';
import Navbar from '@components/Navbar';
import Title from '@components/Title';
import PASSIONS from '@constants/passions.constants';
import PassionsCard from '@components/PassionsCard';
import SEO from '@/components/SEO';
import ProjectCard from '@/components/ProjectCard';
import CONTACTS from '@/constants/contact.constants';
import ContactCard from '@/components/ContactCard';
import HeroLogo from '@/components/HeroLogo';
import PROJECTS from '@/constants/projects.constants';

export default function Home() {
  return (
    <main>
      <SEO />
      <Navbar />
      <section className="hero container" id="hero">
        <div className="hero__image">
          <HeroLogo />
        </div>
        <div className="hero__texts">
          <h3 className="hero__pre-intro">Hi !</h3>
          <h1 className="hero__intro">
            I&apos;m Adarsh Mohan.
            <br />a Front End Developer
          </h1>
          <p className="hero__description">
            Front-End Developer based in India. I am coding with a clean and
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
        <div className="projects__container">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section className="container contact" id="contact">
        <Title lightHeading="Contact" darkHeading="Me" />
        <div className="passions__container">
          {CONTACTS.map((contact) => (
            <ContactCard contact={contact} key={contact.title} />
          ))}
        </div>
      </section>
      <footer className="footer">
        <div className="footer__bg">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </svg>
        </div>
        <div className="footer__content">
          <p className="footer__copyright">Adarsh Mohan &copy;2023</p>
        </div>
      </footer>
    </main>
  );
}
