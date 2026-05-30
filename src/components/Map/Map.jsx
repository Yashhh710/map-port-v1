import React, { useEffect } from 'react';
import './Map.css';
import mapImg from '../../../models/map.png';

const Map = ({ locations, onDotClick }) => {

    useEffect(() => {
        const container = document.getElementById('moving-container');
        const mapImage = container?.querySelector('img');

        function updateDotPosition() {
            if (!container || !mapImage) return;
            
            const containerW = container.offsetWidth;
            const containerH = container.offsetHeight;
            
            const intrinsicW = mapImage.naturalWidth || 1920;
            const intrinsicH = mapImage.naturalHeight || 1080;
            
            if (intrinsicW === 0 || intrinsicH === 0) return;

            const containerRatio = containerW / containerH;
            const intrinsicRatio = intrinsicW / intrinsicH;

            let renderW, renderH, offsetX, offsetY;

            if (containerRatio > intrinsicRatio) {
                renderW = containerW;
                renderH = containerW / intrinsicRatio;
                offsetX = 0;
                offsetY = (containerH - renderH) / 2;
            } else {
                renderH = containerH;
                renderW = containerH * intrinsicRatio;
                offsetX = (containerW - renderW) / 2;
                offsetY = 0;
            }

            locations.forEach(loc => {
                const el = document.getElementById(loc.id);
                if (el) {
                    const dotX = offsetX + renderW * loc.x;
                    const dotY = offsetY + renderH * loc.y;
                    el.style.left = `${dotX}px`;
                    el.style.top = `${dotY - 2}px`;
                }
            });
        }

        if (mapImage && mapImage.complete) {
            updateDotPosition();
        } else if (mapImage) {
            mapImage.addEventListener('load', updateDotPosition);
        }

        window.addEventListener('resize', updateDotPosition);
        return () => {
            if (mapImage) mapImage.removeEventListener('load', updateDotPosition);
            window.removeEventListener('resize', updateDotPosition);
        };
    }, [locations]);

    return (
        <div className="map-wrapper" id="moving-container">
            <img src={mapImg} alt="Interactive Map" />
            
            {/* Home */}
            <div className="marker-dot" id="map-dot" data-label="Home" style={{ '--dot-color': '#ff6a00' }} onClick={(e) => { e.stopPropagation(); onDotClick(locations.find(l => l.id === 'map-dot')) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            </div>
            
            {/* Arcade District */}
            <div className="marker-dot" id="map-arcade" data-label="Arcade District" style={{ '--dot-color': '#a855f7' }} onClick={(e) => { e.stopPropagation(); onDotClick(locations.find(l => l.id === 'map-arcade')) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
                    <path d="M6 12h4"></path>
                    <path d="M8 10v4"></path>
                    <circle cx="15" cy="13" r="1"></circle>
                    <circle cx="18" cy="11" r="1"></circle>
                </svg>
            </div>
            
            {/* Train Station */}
            <div className="marker-dot" id="map-train" data-label="Train Station" style={{ '--dot-color': '#3b82f6' }} onClick={(e) => { e.stopPropagation(); onDotClick(locations.find(l => l.id === 'map-train')) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="16" rx="2" ry="2"></rect>
                    <path d="M4 11h16"></path>
                    <path d="M12 3v8"></path>
                    <path d="M8 19l-2 3"></path>
                    <path d="M16 19l2 3"></path>
                    <path d="M8 15h.01"></path>
                    <path d="M16 15h.01"></path>
                </svg>
            </div>
            
            {/* Observatory */}
            <div className="marker-dot" id="map-observatory" data-label="Observatory" style={{ '--dot-color': '#10b981' }} onClick={(e) => { e.stopPropagation(); onDotClick(locations.find(l => l.id === 'map-observatory')) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M12 15v6"></path>
                    <path d="M9 21h6"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M18 4l2-2"></path>
                </svg>
            </div>
            
            {/* Secret Base */}
            <div className="marker-dot" id="map-base" data-label="Secret Base" style={{ '--dot-color': '#f43f5e' }} onClick={(e) => { e.stopPropagation(); onDotClick(locations.find(l => l.id === 'map-base')) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                </svg>
            </div>
            
            {/* High School */}
            <div className="marker-dot" id="map-school" data-label="High School" style={{ '--dot-color': '#eab308' }} onClick={(e) => { e.stopPropagation(); onDotClick(locations.find(l => l.id === 'map-school')) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
            </div>

            {/* Dump Yard */}
            <div className="marker-dot" id="map-dumpyard" data-label="Dump Yard" style={{ '--dot-color': '#78350f' }} onClick={(e) => { e.stopPropagation(); onDotClick(locations.find(l => l.id === 'map-dumpyard')) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </div>
        </div>
    );
};

export default Map;
