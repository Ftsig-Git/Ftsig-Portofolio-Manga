import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Portfolio Showcase</h1>
            <div className="portfolio-items">
                <div className="portfolio-item">
                    <h2>Project 1</h2>
                    <p>Description of project 1.</p>
                </div>
                <div className="portfolio-item">
                    <h2>Project 2</h2>
                    <p>Description of project 2.</p>
                </div>
                <div className="portfolio-item">
                    <h2>Project 3</h2>
                    <p>Description of project 3.</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;