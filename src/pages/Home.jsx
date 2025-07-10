import React from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/Home.css';
import '../styles/HeroSection.css'; // To use the star CSS
import StarfieldBackground from '../components/StarfieldBackground';


const Home = () => {
  return (
    <div className="star-background">

      {/* Background Stars */}
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

      {/* All Page Content */}
      <HeroSection />

      <section className="about">
  <h2>About SEDS BPHC</h2>
  <p>
    SEDS BPHC (Students for the Exploration and Development of Space) was established in April 2019 by students passionate about space and driven by a single mission — to make space accessible, understandable, and impactful through engineering, innovation, and collaboration.
  </p>
  <p>
    Since its inception, SEDS BPHC has grown into a dynamic and multidisciplinary club with dedicated teams working on rocketry, satellite development, avionics, propulsion systems, and mission simulations.
  </p>
  <p>
    Our members come from various academic backgrounds, but all share a common goal: to bring India’s next generation of space leaders and innovators to the forefront of global exploration.
  </p>
</section>

     <section className="motto">
  <h2>Our Vision</h2>
  <p>
    "Igniting Curiosity. Fueling Innovation. Launching Possibilities."
  </p>
  <p>
    At SEDS BPHC, we believe space is not the final frontier — it’s the next beginning. Our mission is to create an ecosystem where students transform ideas into functioning prototypes, launch experiments into the sky, and push the limits of possibility.
  </p>
  <p>
    We don’t just build rockets or satellites. We build thinkers, problem solvers, and innovators who are ready to take India’s space capabilities to the next level.
  </p>
</section>


      <section className="achievements">
        <h2>Highlights</h2>
        <ul>
          <li>First BITS Pilani team to reach Spaceport America Cup</li>
          <li>Building and testing multiple CubeSats (NEMOlite, NEMO)</li>
          <li>Participated in CanSat competition with tethered payload design</li>
          <li>Developed in-house solid rocket motors (E, G, K classes)</li>
        </ul>
      </section>
      <footer style={{ textAlign: 'center', padding: '20px', opacity: 0.6 }}>
  <p>© {new Date().getFullYear()} SEDS BPHC | Inspired by the Stars</p>
</footer>

    </div>
  );
};

export default Home;
