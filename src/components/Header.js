import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import ResumeSection from './ResumeSection';
import Footer from './Footer';
import './Header.css'; 

export default function Header() {
  const [activeSection, setActiveSection] = useState('about'); // Initial active section

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#1a1a1a', color: '#ffffff' }}>
      <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cody Lawson
          </Typography>
          <Button
            color={activeSection === 'about' ? 'primary' : 'inherit'}
            onClick={() => handleSectionChange('about')}
          >
            About Me
          </Button>
          <Button
            color={activeSection === 'portfolio' ? 'primary' : 'inherit'}
            onClick={() => handleSectionChange('portfolio')}
          >
            Portfolio
          </Button>
          <Button
            color={activeSection === 'contact' ? 'primary' : 'inherit'}
            onClick={() => handleSectionChange('contact')}
          >
            Contact
          </Button>
          <Button
            color={activeSection === 'resume' ? 'primary' : 'inherit'}
            onClick={() => handleSectionChange('resume')}
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1 }}>
        {/* Render different sections based on activeSection */}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'portfolio' && <PortfolioSection />}
        {activeSection === 'contact' && <ContactSection />}
        {activeSection === 'resume' && <ResumeSection />}
      </Box>

      <Footer />
    </Box>
  );
}
