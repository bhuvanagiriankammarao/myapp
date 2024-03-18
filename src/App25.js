import React, { useRef } from 'react';

export default function App25() {
  const divRef = useRef(null);
  const handleColorChange = () => {
    divRef.current.style.backgroundColor = 'yellow';
  };
  return (
    <div ref={divRef}>
      <p>Hello! Welcom to LYROS.And coding</p>
      <button onClick={handleColorChange}>Click</button>
    </div>
  );
};