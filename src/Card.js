import React from 'react';
import { Box, Image, Text, VStack, Heading } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Card({ project }) {
  return (
    <VStack bg="gray.100" p={4} rounded="md" boxShadow="md">
      <Image src={project.image} alt={project.title} boxSize="150px" />
      <Heading size="md">{project.title}</Heading>
      <Text>{project.description}</Text>
      <FontAwesomeIcon icon={faArrowRight} />
    </VStack>
  );
}

export default Card;
