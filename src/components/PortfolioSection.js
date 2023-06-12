import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import './PortfolioSection.css'; // Import the CSS file for styling

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: 'JATE',
      description: 'Just Another Text Editor. A simple text editor built with Javascript.',
      imageUrl: 'https://i.imgur.com/xVm75M4.png',
      githubUrl: 'https://github.com/Grillmast/jate.0',
    },
    {
      id: 2,
      title: 'SquawkTalk',
      description: 'Squawktalk_api is a backend API built using Express.js and Mongoose packages.',
      imageUrl: 'https://i.imgur.com/zSDIeVN.jpg',
      githubUrl: 'https://github.com/Grillmast/squawktalk_api',
    },
    {
        id: 3,
        title: 'Full Send Commerce',
        description: 'The back end for an e-commerce site.',
        imageUrl: 'https://i.imgur.com/1eDL1hg.jpg',
        githubUrl: 'https://github.com/Grillmast/full_send_commerce',
    },
    {
        id: 4,
        title: 'Popular Times',
        description: 'The application is a news portal where users can access the latest news articles of New York Times on various topics and also can save the topic of interest to them to view the related news articles later after log in',
        imageUrl: 'https://i.imgur.com/1F293z3.jpg',
        githubUrl: 'https://github.com/Grillmast/copy_popular_times',
    },
  ];

  return (
    <section className="portfolio-section">
      <Typography variant="h2" component="h2">Portfolio</Typography>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <Card key={project.id} className="project-card">
            <CardMedia
              component="img"
              alt={project.title}
              height="140"
              image={project.imageUrl}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
