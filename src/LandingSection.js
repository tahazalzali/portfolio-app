import React from 'react';
import { Box, Avatar, Text } from '@chakra-ui/react';

function LandingSection() {
  const greeting = "Hello, I'm Taha Zalzali!";
  const bio1 = "A passionate Developer.";
  const bio2 = "Here's a brief overview of my skills.";

  return (
    <Box id="landing-section" textAlign="center" p={5}>
      <Avatar src="https://i.pravatar.cc/150?img=7" size="xl" mb={4} />
      <Text fontSize="xl">{greeting}</Text>
      <Text fontSize="md">{bio1}</Text>
      <Text fontSize="md">{bio2}</Text>
    </Box>
  );
}

export default LandingSection;
