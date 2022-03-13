import React from 'react';

export default function ContactCard({
  contact: { title, link, icon },
}: IContactCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="contact-card"
    >
      <div className="contact-card__image-container">
        <img
          src="./irregular.svg"
          alt="Icon bg"
          className="contact-card__bg-image"
        />
        <div className="contact-card__icon-container">
          <img src={icon} alt="Contact icon" className="contact-card__icon" />
        </div>
      </div>
      {title}
    </a>
  );
}
