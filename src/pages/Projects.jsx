import React, { useEffect } from 'react';
import '../styles/Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StarfieldBackground from '../components/StarfieldBackground'; 
import cubesat from '../assets/projects/cubesat.png';
import cansat from '../assets/projects/cansat.png';
import hybridRocket from '../assets/projects/hybrid-rocket.png';
import saCup from '../assets/projects/sa-cup.png';
import solidMotor from '../assets/projects/solid-motor.png';
import rocketPropulsion from '../assets/projects/rocket-propulsion.png';

const projectData = [
  {
    title: 'Cubesat: NEMOlite & NEMO',
    tagline: 'Microplastic Monitoring & Satellite Demo Missions',
    image: cubesat,
    description: `Team Hyperion is leading the club's satellite missions. NEMOlite is a 1U demo satellite built to gain flight experience and test onboard subsystems like the ADCS (Attitude Determination and Control System). The upcoming NEMO satellite is designed to use remote sensing to monitor microplastics in the Gulf of Mannar and contribute to environmental research. These missions help students get hands-on experience with satellite buses, sensors, and communication protocols.`
  },
  {
    title: 'CanSat Satellite Project',
    tagline: 'Miniature Payload with Real-Time Telemetry',
    image: cansat,
    description: `Team Janus designs CanSats that mimic real satellite systems in a compact form. The CanSat container features GPS, pressure, and rotation sensors, and is tested for thermal, vibration, and drop endurance. The payload camera maintains consistent orientation using flight software, and the entire system transmits data to a ground control station via Xbee radios. These systems help students understand real aerospace constraints in a scaled-down form.`
  },
  {
    title: 'Hybrid Rocket Engine',
    tagline: 'Liquid + Solid Fuel Innovation for Safer Propulsion',
    image: hybridRocket,
    description: `Led by Team Archangel, the Hybrid Rocket Engine project is focused on creating a research-grade propulsion platform that uses solid fuel and a gaseous oxidizer. Designed for 1kN of thrust, it allows testing of various feed and injection systems. The team also develops data acquisition and safety systems alongside the mechanical design. The long-term goal is to power future high-altitude launches with hybrid propulsion systems.`
  },
  {
    title: 'SA Cup Rocket Launch (Apeiron II & III)',
    tagline: 'India’s First BITS Campus to Launch at Spaceport America',
    image: saCup,
    description: `Team Artemis proudly represented SEDS BPHC at the Spaceport America Cup. Competing in the COTS category, they built Apeiron II and Apeiron III rockets, aiming to reach 10,000 ft altitude with pre-certified solid rocket motors. The rockets were built with precision in recovery systems, payload deployment, and structural design. Each subsystem—from avionics to propulsion—was handled by dedicated student engineers.`
  },
  {
    title: 'Solid Rocket Motor Development',
    tagline: 'From J-Class to M-Class Rocket Engines',
    image: solidMotor,
    description: `The propulsion division of Team Archangel works on solid motors with increasing complexity. Starting with J-class motors, the team has successfully fired prototypes, gathered thrust data using NI DAQ and MATLAB, and documented the processes for scale-up. These motors help students understand ignition systems, nozzle geometry, combustion efficiency, and thermal management in real-world applications.`
  },
  {
    title: 'Rocket Propulsion',
    tagline: 'Wireless Ignition and Data Collection',
    image: rocketPropulsion,
    description: `A special R&D effort where team members collaborated to build a J-class rocket engine with wireless ignition using a Bolt IoT module. The engine was tested and data collected via NI DAQ. With two successful firings completed by November 2022, the project now aims to develop M-class motors using custom-made propellant blends and test beds. This project serves as a training ground for all propulsion initiatives at SEDS BPHC.`
  }
];
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <StarfieldBackground />
    <div className="projects-container">
      <h1>Our Projects</h1>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div
            className="project-card fade-in"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <h4 className="tagline">{project.tagline}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <section className="project-achievements fade-in">
  <h2>Major Achievements</h2>
  <ul>
    <li>Successfully launched Apeiron II to 10,000 feet at Spaceport America Cup 2021.</li>
    <li>Completed testing of NEMOlite CubeSat with stable attitude control system.</li>
    <li>Developed an in-house hybrid rocket engine prototype under Team Archangel.</li>
    <li>Reached Critical Design Review phase in CanSat competition with autonomous payload.</li>
    <li>NEMO satellite mission initiated to monitor microplastic pollution in ocean regions.</li>
  </ul>
</section>
      <div className="projects-footer-note">
        <p>
          We’re continuously pushing boundaries — from satellite deployment to next-gen propulsion. More missions, more learning, and more innovation await.
        </p>
      </div>
    </div>
    </>
  );
};

export default Projects;
