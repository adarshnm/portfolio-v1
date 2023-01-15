import React from 'react';
import CardBlob from '../CardBlob';

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
        <CardBlob />
        <div className="contact-card__icon-container">
          <img src={icon} alt="Contact icon" className="contact-card__icon" />
        </div>
      </div>
      {title}
    </a>
  );
}
