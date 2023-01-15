import React from 'react';
import BlurredObject from './BlurredObject';

function BackgroundEffects() {
  return (
    <div className="main__background">
      {Array.from({ length: 10 }, (x, i) => i).map((value) => {
        const x = Math.floor(Math.random() * (80 - 0) + 0);
        const y = Math.floor(Math.random() * (100 - 10) + 10);
        const size = Math.floor(Math.random() * (200 - 100) + 100);
        return (
          <BlurredObject
            key={value}
            size={{ width: size, height: size }}
            pos={{ top: x, right: y }}
          />
        );
      })}
    </div>
  );
}

export default BackgroundEffects;
