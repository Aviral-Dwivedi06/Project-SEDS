import React, { useEffect, useState } from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Students for the Exploration and Development of Space';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="hero-container">
    {/* Background stars */}
    <div className="stars">
      {[...Array(150)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 1}s`,
            opacity: `${Math.random() * 0.6 + 0.3}`,
          }}
        />
      ))}
    </div>

    {/* Foreground text */}
    <h1>Welcome to SEDS BPHC</h1>
    <h2 className="typing-text">
      {text}
    </h2>
    <p>
  "The cosmos is within us,<br />We are made of star-stuff."
</p>

  </div>
);
};

export default HeroSection;
