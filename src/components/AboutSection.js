import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export default function AboutSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh', 
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <section className='section'>
        <Typography variant="h2" component="h2" gutterBottom>About Me</Typography>
        <div className='section-content'>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Avatar
            src="https://i.imgur.com/SmjVGoZ.jpg"
            alt="Your Name"
            sx={{ width: 150, height: 150, marginRight: 2 }}
          />
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant="body1" gutterBottom>
              Welcome to my profile. I am a student at the University of Denver, currently focused on server-side development as part of my pursuit of coding proficiency. I am working diligently to gain expertise in this field and plan to expand my knowledge to include Python and Django in the near future.
            </Typography>
          </Box>
        </Box>
        </div>
      </section>
    </Box>
  );
}
