import React from 'react';

export default function PassionsCard({
  passion: { imageLink, prominentTitle, trivialTitle, techSummary },
}: IPassionsCardProps) {
  return (
    <div className="passion-card">
      <img className="passion-card__image" src={imageLink} alt="PassionImage" />
      <h4>
        <span className="passion-card__text passion-card__text--dark">
          {prominentTitle}
        </span>
        &nbsp;
        <span className="passion-card__text passion-card__text--light">
          {trivialTitle}
        </span>
      </h4>
      <p className="passion-card__summary">{techSummary}</p>
    </div>
  );
}
