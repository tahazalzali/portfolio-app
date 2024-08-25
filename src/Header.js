import React from 'react';
import { Box, HStack, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const socials = [
    { name: 'LinkedIn', icon: faLinkedin, link: 'https://linkedin.com' },
    { name: 'Twitter', icon: faTwitter, link: 'https://twitter.com' },
    { name: 'GitHub', icon: faGithub, link: 'https://github.com' }
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box bg="black" color="white" p={4}>
      <HStack justifyContent="space-between">
        <HStack spacing="24px">
          {socials.map(social => (
            <Link href={social.link} isExternal key={social.name}>
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </Link>
          ))}
        </HStack>
        <HStack spacing="24px">
          <Link href="#projects-section" onClick={() => handleClick('projects-section')}>Projects</Link>
          <Link href="#contactme-section" onClick={() => handleClick('contactme-section')}>Contact Me</Link>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Header;
