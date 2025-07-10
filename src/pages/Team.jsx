import React, { useEffect, useState } from 'react';
import '../styles/Team.css';
import StarfieldBackground from '../components/StarfieldBackground';

// Import member images
import Krishna from '../assets/members/Krishna.png';
import Sham from '../assets/members/Sham.png';
import Umang from '../assets/members/Umang.png';
import Rahul from '../assets/members/Rahul.png';
import Gautham from '../assets/members/Gautham.png';

const defaultExecutiveBoard = [
  {
    id: 1,
    name: 'Krishna Kant Jain',
    role: 'President',
    description:
      'Oversees all club activities, leads strategic direction, and manages collaboration between all teams.',
    image: Krishna,
  },
  {
    id: 2,
    name: 'Sham Patel',
    role: 'Vice President',
    description:
      'Supports the president, ensures smooth execution of events, and coordinates inter-team efforts.',
    image: Sham,
  },
  {
    id: 3,
    name: 'Umang Tekriwal',
    role: 'Director of Projects',
    description:
      'Leads technical development across all projects and ensures engineering goals are met efficiently.',
    image: Umang,
  },
  {
    id: 4,
    name: 'Rahul Sharma',
    role: 'Treasurer',
    description:
      'Handles budgeting, funding proposals, and resource allocation for all ongoing and upcoming projects.',
    image: Rahul,
  },
  {
    id: 5,
    name: 'Gautham Gandhi',
    role: 'Head of Outreach',
    description:
      'Manages PR, social media, and external collaborations to promote club visibility and engagement.',
    image: Gautham,
  },
];

const Team = () => {
  const [executiveBoard, setExecutiveBoard] = useState([]);
  const [editMode, setEditMode] = useState(false);

  // Load saved data from localStorage, merge with image imports
  useEffect(() => {
    const saved = localStorage.getItem('executiveBoard');
    const parsed = saved ? JSON.parse(saved) : [];

    // Merge saved data with default images
    const merged = defaultExecutiveBoard.map(member => {
      const edited = parsed.find(m => m.id === member.id);
      return edited ? { ...member, ...edited } : member;
    });

    setExecutiveBoard(merged);
  }, []);

  // Only store editable text fields, not image paths
  const handleChange = (id, field, value) => {
    const updated = executiveBoard.map(member =>
      member.id === id ? { ...member, [field]: value } : member
    );

    // Save only editable fields
    const toStore = updated.map(({ id, name, role, description }) => ({
      id, name, role, description,
    }));

    localStorage.setItem('executiveBoard', JSON.stringify(toStore));
    setExecutiveBoard(updated);
  };

  return (
    <>
      <StarfieldBackground />
      <div className="team-container">
        <h1>Meet the Team</h1>

       <div className="team-controls">
  <button className="team-btn" onClick={() => setEditMode(!editMode)}>
    {editMode ? 'Disable Edit Mode' : 'Enable Edit Mode'}
  </button>
  <button
    className="team-btn reset-btn"
    onClick={() => {
      localStorage.removeItem('executiveBoard');
      setExecutiveBoard(defaultExecutiveBoard);
      setEditMode(false);
    }}
  >
    Reset to Default
  </button>
</div>

        <section className="executive-board">
          <h2>Executive Board</h2>
          <div className="eb-grid">
            {executiveBoard.map(member => (
              <div className="eb-card fade-in" key={member.id}>
                <img src={member.image} alt={member.name} />
                {editMode ? (
                  <>
                    <input
                      type="text"
                      value={member.name}
                      onChange={e =>
                        handleChange(member.id, 'name', e.target.value)
                      }
                    />
                    <input
                      type="text"
                      value={member.role}
                      onChange={e =>
                        handleChange(member.id, 'role', e.target.value)
                      }
                    />
                    <textarea
                      value={member.description}
                      onChange={e =>
                        handleChange(member.id, 'description', e.target.value)
                      }
                    />
                  </>
                ) : (
                  <>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p>{member.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

      <section className="sub-teams">
        <h2>Our Project Teams</h2>
        <div className="team-section">
          <div className="team-card fade-in">
            <h3>Team Artemis</h3>
            <div className="team-images">
              <img src="/src/assets/members/misc/teams/artemis-leads.png" alt="Artemis Leads" />
              <img src="/src/assets/members/misc/teams/artemis-group.png" alt="Artemis Group" />
            </div>
            <p>
              Team Artemis marked <strong>SEDS BPHC’s breakthrough</strong> at the Spaceport America Cup in 2021 — the <strong>first and only BITS Pilani campus</strong> to take part in the competition. Tasked with launching an <strong>8-foot, 28kg rocket</strong> to 10,000 feet using <strong>COTS solid rocket motors</strong>, the team showcased engineering brilliance. Today, Artemis continues to innovate in <strong>high-power rocketry</strong>, aiming for global recognition.
            </p>
          </div>

          <div className="team-card fade-in">
            <h3>Team Janus</h3>
            <div className="team-images">
              <img src="/src/assets/members/misc/teams/janus-lead.png" alt="Janus Lead" />
              <img src="/src/assets/members/misc/teams/janus-group.png" alt="Janus Group" />
            </div>
            <p>
              Team Janus carries our vision to the global stage through the <strong>CanSat Competition</strong> — a challenge simulating real-world aerospace missions. In 2021, they developed <strong>auto-rotating payloads</strong> and reached the <strong>Critical Design Review (CDR)</strong> stage, despite pandemic hurdles. In 2022, they engineered a <strong>tethered payload</strong> with precise camera orientation. Janus is all about <strong>autonomy, innovation, and resilience</strong>.
            </p>
          </div>

          <div className="team-card fade-in">
            <h3>Team Hyperion</h3>
            <div className="team-images">
              <img src="/src/assets/members/misc/teams/hyperion-leads.png" alt="Hyperion Leads" />
              <img src="/src/assets/members/misc/teams/hyperion-group.png" alt="Hyperion Group" />
            </div>
            <p>
              Hyperion is building the future with <strong>CubeSats</strong> — compact satellites with massive potential. Their first satellite, <strong>NEMOlite</strong>, is a demonstration mission to validate <strong>ADCS and core subsystems</strong>. Their next mission, <strong>NEMO</strong>, aims to track <strong>microplastics in the Gulf of Mannar</strong>. Hyperion empowers science with small-scale space tech that delivers big results.
            </p>
          </div>

          <div className="team-card fade-in">
            <h3>Team Archangel</h3>
            <div className="team-images">
              <img src="/src/assets/members/misc/teams/archangel-leads.png" alt="Archangel Leads" />
              <img src="/src/assets/members/misc/teams/archangel-group.png" alt="Archangel Group" />
            </div>
            <p>
              Archangel is the <strong>R&D division</strong> of SEDS BPHC — where big ideas take their first breath. Current work includes <strong>Thrust Vector Control (TVC)</strong> systems for dynamic flight maneuvering, and the design and testing of <strong>E, I, G, and K-class solid rocket motors</strong>. Next: conquering <strong>M-class and hybrid propulsion</strong>. Archangel builds what others only imagine.
            </p>
          </div>
        </div>
      </section>
    </div>
     </>
  );
};

export default Team;
