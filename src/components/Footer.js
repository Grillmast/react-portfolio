import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'; // Import the CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://github.com/your-github-url" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="icon" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-url" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
