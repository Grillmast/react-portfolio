import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset form fields
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
      }}
    >
      <section className="section">
        <Typography variant="h2" component="h2" gutterBottom style={{ color: '#ffffff' }}>
          Contact
        </Typography>
        <div className="section-content">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
              InputProps={{
                style: { color: '#ffffff', borderColor: 'white' },
                classes: { notchedOutline: 'white-outline' },
              }}
              InputLabelProps={{ style: { color: '#ffffff' } }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              InputProps={{
                style: { color: '#ffffff', borderColor: 'white' },
                classes: { notchedOutline: 'white-outline' },
              }}
              InputLabelProps={{ style: { color: '#ffffff' } }}
            />
            <TextField
              label="Comment"
              variant="outlined"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              multiline
              rows={4}
              fullWidth
              margin="normal"
              InputProps={{
                style: { color: '#ffffff', borderColor: 'white' },
                classes: { notchedOutline: 'white-outline' },
              }}
              InputLabelProps={{ style: { color: '#ffffff' } }}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </Box>
  );
}
