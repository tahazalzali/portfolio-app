import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';
import LandingSection from './LandingSection';
import ProjectsSection from './ProjectsSection';
import ContactMeSection from './ContactMeSection';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
    </ChakraProvider>
  );
}

export default App;
