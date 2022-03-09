import React from 'react';

type Props = {
  darkHeading: string;
  lightHeading: string;
};

export default function Title({ darkHeading, lightHeading }: Props) {
  return (
    <div className="title">
      <h3>
        <span className="title__text title__text--light">{lightHeading}</span>
        &nbsp;
        <span className="title__text title__text--dark">{darkHeading}</span>
      </h3>
    </div>
  );
}
