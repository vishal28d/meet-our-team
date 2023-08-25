import React from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: member.index * 0.001 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <Card maxW="sm">
        <CardBody>
          <Image src={member.image} alt={member.name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{member.name}</Heading>
            <Text>{member.role}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="center" alignItems="center" spacing="8" style={{ marginTop: '10px' }}>
          <FontAwesomeIcon icon={faInstagram} size="3x" style={{ marginRight: '20px' }} />
          <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ marginRight: '20px' }} />
          <FontAwesomeIcon icon={faGithub} size="3x" style={{ marginRight: '20px' }} />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
