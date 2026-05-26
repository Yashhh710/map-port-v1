import React from 'react';
import './IndexSection.css';

const IndexSection = () => {
    return (
        <div className="map-index-box">
            <div className="index-title">MAP INDEX</div>
            <div className="index-item">
                <svg className="index-icon-svg" style={{ stroke: '#ff6a00', filter: 'drop-shadow(0 0 4px #ff6a00)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Home</span>
            </div>
            <div className="index-item">
                <svg className="index-icon-svg" style={{ stroke: '#a855f7', filter: 'drop-shadow(0 0 4px #a855f7)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
                    <path d="M6 12h4"></path>
                    <path d="M8 10v4"></path>
                    <circle cx="15" cy="13" r="1"></circle>
                    <circle cx="18" cy="11" r="1"></circle>
                </svg>
                <span>Arcade District</span>
            </div>
            <div className="index-item">
                <svg className="index-icon-svg" style={{ stroke: '#3b82f6', filter: 'drop-shadow(0 0 4px #3b82f6)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="16" rx="2" ry="2"></rect>
                    <path d="M4 11h16"></path>
                    <path d="M12 3v8"></path>
                    <path d="M8 19l-2 3"></path>
                    <path d="M16 19l2 3"></path>
                    <path d="M8 15h.01"></path>
                    <path d="M16 15h.01"></path>
                </svg>
                <span>Train Station</span>
            </div>
            <div className="index-item">
                <svg className="index-icon-svg" style={{ stroke: '#10b981', filter: 'drop-shadow(0 0 4px #10b981)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M12 15v6"></path>
                    <path d="M9 21h6"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M18 4l2-2"></path>
                </svg>
                <span>Observatory</span>
            </div>
            <div className="index-item">
                <svg className="index-icon-svg" style={{ stroke: '#f43f5e', filter: 'drop-shadow(0 0 4px #f43f5e)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                </svg>
                <span>Secret Base</span>
            </div>
            <div className="index-item">
                <svg className="index-icon-svg" style={{ stroke: '#eab308', filter: 'drop-shadow(0 0 4px #eab308)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <span>High School</span>
            </div>
        </div>
    );
};

export default IndexSection;
