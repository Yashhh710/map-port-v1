import React from 'react';
import './Cards.css';

const Cards = ({ isOpen, location, onClose, onVisitClick }) => {
    if (!location) {
        return (
            <div className={`side-card ${isOpen ? 'open' : ''}`} id="detail-card">
                <button className="close-btn" id="close-card" onClick={onClose}>&times;</button>
            </div>
        );
    }

    const isHome = location.id === 'map-dot';

    return (
        <div className={`side-card ${isOpen ? 'open' : ''}`} id="detail-card">
            <button className="close-btn" id="close-card" onClick={onClose} style={{ color: location.color }}>&times;</button>
            <div className="id-badge-container">
                <div className="id-badge" id="sci-fi-badge" style={{ borderColor: location.color }}>
                    <div className="lanyard-hole"></div>
                    <div className="badge-top">
                        <div className="bm-logo">
                            <div className="bm-logo-inner"></div>
                        </div>
                        <div className="top-title">
                            <h1>{location.title}</h1>
                            <h2>{location.sub}</h2>
                            <p>INDIA</p>
                        </div>
                    </div>

                    <div className="badge-middle">
                        <div className="section-heading">SECURE SITE ACCESS</div>
                        <div className="info-grid">
                            <div className="qr-code">
                                <div></div><div></div><div></div><div className="w"></div><div className="w"></div><div></div><div></div><div></div><div className="w"></div><div></div>
                                <div></div><div className="w"></div><div></div><div></div><div className="w"></div><div></div><div className="w"></div><div></div><div className="w"></div><div className="w"></div>
                                <div></div><div></div><div></div><div className="w"></div><div></div><div></div><div></div><div className="w"></div><div></div><div></div>
                                <div className="w"></div><div className="w"></div><div className="w"></div><div></div><div className="w"></div><div className="w"></div><div className="w"></div><div></div><div className="w"></div><div></div>
                                <div></div><div className="w"></div><div></div><div></div><div></div><div className="w"></div><div></div><div className="w"></div><div></div><div></div>
                                <div></div><div></div><div className="w"></div><div className="w"></div><div className="w"></div><div></div><div className="w"></div><div></div><div className="w"></div><div></div>
                                <div className="w"></div><div className="w"></div><div></div><div className="w"></div><div></div><div></div><div></div><div className="w"></div><div></div><div></div>
                                <div></div><div className="w"></div><div className="w"></div><div></div><div></div><div className="w"></div><div className="w"></div><div></div><div className="w"></div><div></div>
                                <div></div><div className="w"></div><div></div><div></div><div></div><div className="w"></div><div></div><div className="w"></div><div></div><div></div>
                            </div>
                            <div className="info-text">
                                <div className="info-field full-width">
                                    <div className="info-label">NAME</div>
                                    <div className="info-value" id="badge-name">YASH TAMBADE</div>
                                </div>
                                <div className="info-field full-width">
                                    <div className="info-label">DEPARTMENT</div>
                                    <div className="info-value" id="badge-dept">B.TECH - CSE</div>
                                </div>
                                <div className="info-field">
                                    <div className="info-label">STATUS</div>
                                    <div className="info-value" id="badge-status">AUTHORIZED</div>
                                </div>
                                <div className="info-field">
                                    <div className="info-label">EMPLOYEE ID</div>
                                    <div className="info-value" id="badge-id">AX-77821</div>
                                </div>
                                <div className="info-field full-width">
                                    <div className="info-label">CLEARANCE</div>
                                    <div className="info-value" id="badge-clearance-mid">{location.clearance}</div>
                                </div>
                            </div>
                        </div>
                        <div className="badge-desc" id="badge-desc" dangerouslySetInnerHTML={{ __html: location.desc }}>
                        </div>
                    </div>

                    <div className="badge-lower">
                        <div className="profile-space">
                            <img src={location.img} alt="Target Location" className="profile-house-img" />
                        </div>
                        <div className="vertical-strip" style={{ backgroundColor: location.color }}>
                            <div className="vertical-text" id="badge-access">UNRESTRICTED</div>
                        </div>
                        <div className="barcode-space">
                            <div className="barcode">
                                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>

                    <div className="badge-bottom" style={{ backgroundColor: location.color }}>
                        <a 
                            href={isHome ? "https://home-port-v1.vercel.app/" : "#"} 
                            target={isHome ? "_blank" : undefined}
                            rel={isHome ? "noopener noreferrer" : undefined}
                            className={`bottom-sector-btn ${!isHome ? 'locked' : ''}`} 
                            id="sector-link"
                            style={{ color: isHome ? location.color : '' }}
                            onClick={(e) => {
                                if (!isHome) {
                                    e.preventDefault();
                                } else if (onVisitClick) {
                                    onVisitClick();
                                }
                            }}
                        >
                            {isHome ? 'VISIT HOME' : 'ACCESS DENIED'}
                        </a>
                        <div className="bottom-clearance">
                            <div>CLEARANCE</div>
                            <span id="badge-clearance-bot">{location.clearance}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
