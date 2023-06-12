import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'; // Import the CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://github.com/Grillmast" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/cody-lawson-325397267/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
