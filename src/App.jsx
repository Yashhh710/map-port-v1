import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Cards from './components/Cards/Cards';
import Map from './components/Map/Map';
import IndexSection from './components/IndexSection/IndexSection';
import Footer from './components/Footer/Footer';

const locationsData = [
    { id: 'map-dot', x: 0.36, y: 0.29, title: "MY HOME", sub: "Timepass only", color: "#ff6a00", clearance: "LVL 18", img: "models/house.png", desc: "<ul style='margin:0; padding-left:15px; text-align:left;'><li>Cozy anime-inspired room</li><li>Interactive Mac setup</li><li>Drawings and photo gallery</li><li>Skills showcase</li><li>Short personal introduction</li><li>Warm and relaxing atmosphere</li></ul>" },
    { id: 'map-arcade', x: 0.52, y: 0.40, title: "ARCADE DISTRICT", sub: "Gaming & Fun", color: "#a855f7", clearance: "LVL 10", img: "models/arcade.png", desc: "<ul style='margin:0; padding-left:15px; text-align:left;'><li>Neon cyberpunk gaming streets</li><li>Interactive arcade machines</li><li>Creative projects showcase</li><li>RGB signs and holograms</li><li>Fun easter eggs</li><li>Energetic city vibe</li></ul>" },
    { id: 'map-train', x: 0.41, y: 0.60, title: "TRAIN STATION", sub: "Transport Hub", color: "#3b82f6", clearance: "LVL 5", img: "models/train.png", desc: "<ul style='margin:0; padding-left:15px; text-align:left;'><li>Main navigation hub</li><li>Connects all portfolio locations</li><li>Futuristic metro atmosphere</li><li>Interactive train routes</li><li>Animated boards and lights</li><li>Smooth travel between sections</li></ul>" },
    { id: 'map-observatory', x: 0.66, y: 0.20, title: "OBSERVATORY", sub: "Space Research", color: "#10b981", clearance: "LVL 25", img: "models/observatory.png", desc: "<ul style='margin:0; padding-left:15px; text-align:left;'><li>Peaceful sky observatory</li><li>Future goals and dreams</li><li>Creative vision showcase</li><li>Space-inspired atmosphere</li><li>Floating stars and clouds</li><li>Calm cinematic environment</li></ul>" },
    { id: 'map-base', x: 0.82, y: 0.70, title: "SECRET BASE", sub: "Classified", color: "#f43f5e", clearance: "TOP SECRET", img: "models/base.png", desc: "<ul style='margin:0; padding-left:15px; text-align:left;'><li>Hidden cyber bunker</li><li>Secret projects and experiments</li><li>Hacker-inspired systems</li><li>Hidden easter eggs</li><li>Dark futuristic atmosphere</li><li>Unlockable discoveries</li></ul>" },
    { id: 'map-school', x: 0.60, y: 0.34, title: "HIGH SCHOOL", sub: "Education", color: "#eab308", clearance: "STUDENT", img: "models/school.png", desc: "<ul style='margin:0; padding-left:15px; text-align:left;'><li>Anime-style school environment</li><li>Personal learning journey</li><li>Creative growth and memories</li><li>Classroom and rooftop interactions</li><li>School festival atmosphere</li><li>Nostalgic slice-of-life vibe</li></ul>" }
];

function App() {
  const [activeLocation, setActiveLocation] = useState(null);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const toggleMute = () => {
      const nextMuted = !isMuted;
      setIsMuted(nextMuted);
      if (audioRef.current) {
          audioRef.current.muted = nextMuted;
          if (!nextMuted) {
              audioRef.current.play().catch(e => console.warn("Audio play failed:", e));
          }
      }
  };

  const forceMute = () => {
      setIsMuted(true);
      if (audioRef.current) {
          audioRef.current.muted = true;
      }
  };

  useEffect(() => {
      if (audioRef.current && !isMuted) {
          audioRef.current.play().catch(() => {
              setIsMuted(true);
          });
      }
  }, [isMuted]);

  useEffect(() => {
    const handleMouseMove = (e) => {
        const container = document.getElementById('moving-container');
        if (!container) return;
        const x = (0.5 - e.clientX / window.innerWidth) * 40;
        const y = (0.5 - e.clientY / window.innerHeight) * 30;
        container.style.transform = `translate(${x}px, ${y}px)`;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
        const card = document.getElementById('detail-card');
        const isDotClick = e.target.closest('.marker-dot');
        if (card && !card.contains(e.target) && !isDotClick) {
            setIsCardOpen(false);
        }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleDotClick = (loc) => {
      if (isCardOpen) {
          setIsCardOpen(false);
          setTimeout(() => {
              setActiveLocation(loc);
              setIsCardOpen(true);
          }, 550);
      } else {
          setActiveLocation(loc);
          setIsCardOpen(true);
      }
  };

  return (
    <>
      <audio ref={audioRef} src="/models/bg-music.mp3" loop autoPlay muted={isMuted} />
      <Header onInfoClick={() => setIsInfoModalOpen(true)} isMuted={isMuted} onToggleMute={toggleMute} />
      <Dashboard isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
      <Cards isOpen={isCardOpen} location={activeLocation} onClose={() => setIsCardOpen(false)} onVisitClick={forceMute} />
      <Map locations={locationsData} onDotClick={handleDotClick} />
      <IndexSection />
      <Footer />
    </>
  )
}

export default App;
