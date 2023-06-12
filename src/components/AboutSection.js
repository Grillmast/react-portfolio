import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function AboutSection() {
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);

  useEffect(() => {
    // Simulate fetching data from an API
    fetchData()
      .then((data) => {
        animateValue(0, data.coffeeCount, 2000, setCoffeeCount);
        animateValue(0, data.videoCount, 2000, setVideoCount);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const animateValue = (start, end, duration, setValue) => {
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      setValue(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  // Simulated asynchronous data fetching function
  const fetchData = () => {
    return new Promise((resolve) => {
      // Simulate API call delay
      setTimeout(() => {
        resolve({
          coffeeCount: 20, 
          videoCount: 50, 
        });
      }, 1000);
    });
  };

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
      <section className="section">
        <Typography variant="h2" component="h2" gutterBottom>About Me</Typography>
        <div className="section-content">
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
              <Card sx={{ minWidth: 275, margin: '0.5rem' }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Cups of Coffee Drank
                  </Typography>
                  <Typography
                    variant="h3"
                    component="p"
                    sx={{ marginTop: '1rem', transition: 'all 0.5s ease-in-out' }}
                  >
                    {coffeeCount}
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 275, margin: '0.5rem' }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    YouTube Videos Watched
                  </Typography>
                  <Typography
                    variant="h3"
                    component="p"
                    sx={{ marginTop: '1rem', transition: 'all 0.5s ease-in-out' }}
                  >
                    {videoCount}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </div>
      </section>
    </Box>
  );
}