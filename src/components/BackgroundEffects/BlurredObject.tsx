import React, { useMemo } from 'react';

function BlurredObject({ size, pos }: IBlurredObjectProps) {
  const objSize = useMemo(() => size || { width: 200, height: 200 }, [size]);
  const objPos = useMemo(() => pos || { top: 10, right: 10 }, [pos]);
  return (
    <span
      className="main__blured-object"
      style={{
        width: `${objSize.width}px`,
        height: `${objSize.height}px`,
        borderRadius: `${objSize.width / 2}px`,
        top: `${objPos.top}%`,
        right: `${objPos.right}%`,
      }}
    />
  );
}

export default BlurredObject;
