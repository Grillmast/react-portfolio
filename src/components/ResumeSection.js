import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function ResumeSection() {
  return (
    <Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Resume
      </Typography>
      <Typography variant="body1" gutterBottom>
        Thank you for your interest! Feel free to download my resume to learn more about my qualifications and experience.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="https://drive.google.com/file/d/13gXmN54nn9jqxHyv3buJoNnw_ivuP2PA/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </Button>
      </Box>
      <Typography variant="h3" component="h3" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="body1" gutterBottom>
        I am a highly motivated and skilled professional with expertise in server-side development and a strong passion for coding. With several months of experience working on web development projects, I have gained proficiency in JavaScript, Node.js, and database management. I have successfully delivered projects in diverse domains, leveraging my problem-solving skills and ability to collaborate effectively in teams.
      </Typography>
      <Typography variant="h3" component="h3" gutterBottom>
        Key Accomplishments
      </Typography>
      <ul>
        <Typography component="li" variant="body1">
          Worked on multiple projects that had tight time constraints and delivered them on time.
        </Typography>
        <Typography component="li" variant="body1">
          Scored highly with classmates on reviews of our projects and presentations.
        </Typography>
        <Typography component="li" variant="body1">
          Created a varitey of projects that demonstrate my skills in JavaScript, Node.js, and database management.
        </Typography>
      </ul>
      <Typography variant="h3" component="h3" gutterBottom>
        Technical Skills
      </Typography>
      <ul>
        <Typography component="li" variant="body1">
          JavaScript (ES6+)
        </Typography>
        <Typography component="li" variant="body1">
          Node.js
        </Typography>
        <Typography component="li" variant="body1">
          React.js
        </Typography>
        <Typography component="li" variant="body1">
          Express.js
        </Typography>
        <Typography component="li" variant="body1">
          SQL and NoSQL Databases
        </Typography>
        <Typography component="li" variant="body1">
          RESTful APIs
        </Typography>
      </ul>
    </Box>
  );
}
