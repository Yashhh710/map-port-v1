import React from 'react';
import './Dashboard.css';

const Dashboard = ({ isOpen, onClose }) => {
    return (
        <div 
            className={`info-modal ${isOpen ? 'active' : ''}`} 
            id="info-modal"
            onClick={(e) => {
                if (e.target.id === 'info-modal') onClose();
            }}
        >
            <div className="info-modal-content">
                <button className="close-info-btn" id="close-info" onClick={onClose}>&times;</button>
                <h2>🗺 World Map</h2>
                <p>Mini animated map showing all locations. Hovering shows short descriptions.</p>
                
                <div className="info-location" style={{ borderLeftColor: '#ff6a00' }}>
                    <h3>🏠 Home Area</h3>
                    <ul>
                        <li>Cozy anime-inspired room</li>
                        <li>Interactive Mac setup</li>
                        <li>Drawings and photo gallery</li>
                        <li>Skills showcase</li>
                        <li>Short personal introduction</li>
                        <li>Warm and relaxing atmosphere</li>
                    </ul>
                </div>
                
                <div className="info-location" style={{ borderLeftColor: '#a855f7' }}>
                    <h3>🎮 Arcade District</h3>
                    <ul>
                        <li>Neon cyberpunk gaming streets</li>
                        <li>Interactive arcade machines</li>
                        <li>Creative projects showcase</li>
                        <li>RGB signs and holograms</li>
                        <li>Fun easter eggs</li>
                        <li>Energetic city vibe</li>
                    </ul>
                </div>
                
                <div className="info-location" style={{ borderLeftColor: '#3b82f6' }}>
                    <h3>🚆 Train Station</h3>
                    <ul>
                        <li>Main navigation hub</li>
                        <li>Connects all portfolio locations</li>
                        <li>Futuristic metro atmosphere</li>
                        <li>Interactive train routes</li>
                        <li>Animated boards and lights</li>
                        <li>Smooth travel between sections</li>
                    </ul>
                </div>

                <div className="info-location" style={{ borderLeftColor: '#10b981' }}>
                    <h3>🌌 Observatory</h3>
                    <ul>
                        <li>Peaceful sky observatory</li>
                        <li>Future goals and dreams</li>
                        <li>Creative vision showcase</li>
                        <li>Space-inspired atmosphere</li>
                        <li>Floating stars and clouds</li>
                        <li>Calm cinematic environment</li>
                    </ul>
                </div>
                
                <div className="info-location" style={{ borderLeftColor: '#f43f5e' }}>
                    <h3>🛸 Underground Secret Base</h3>
                    <ul>
                        <li>Hidden cyber bunker</li>
                        <li>Secret projects and experiments</li>
                        <li>Hacker-inspired systems</li>
                        <li>Hidden easter eggs</li>
                        <li>Dark futuristic atmosphere</li>
                        <li>Unlockable discoveries</li>
                    </ul>
                </div>

                <div className="info-location" style={{ borderLeftColor: '#eab308' }}>
                    <h3>🏫 High School</h3>
                    <ul>
                        <li>Anime-style school environment</li>
                        <li>Personal learning journey</li>
                        <li>Creative growth and memories</li>
                        <li>Classroom and rooftop interactions</li>
                        <li>School festival atmosphere</li>
                        <li>Nostalgic slice-of-life vibe</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
