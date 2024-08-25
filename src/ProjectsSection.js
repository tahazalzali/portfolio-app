import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card.js';

function ProjectsSection() {
  const projects = [
    { id: 1, title: "Project 1", description: "A cool project.", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Project 2", description: "Another cool project.", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Project 3", description: "Another cool project.", image: "https://via.placeholder.com/150" }  
];

  return (
    <SimpleGrid columns={3} spacing={10} p={10} id="projects-section">
      {projects.map(project => (
        <Card key={project.id} project={project} />
      ))}
    </SimpleGrid>
  );
}

export default ProjectsSection;
