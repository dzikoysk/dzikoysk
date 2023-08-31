import {Flex, Heading, Stack, Text} from "@chakra-ui/react";
import React from "react";

const transcriptions = [
  {
    title: 'Phoenix (arr. chillOwlPiano)',
    description: 'League of Legends - Phoenix (ft. Cailin Russo i Chrissy Costanza)',
    link: 'https://musescore.com/dzikoysk/phoenix'
  },
  {
    title: 'Bring Home the Glory (arr. chillOwlPiano)',
    description: 'League of Legends - Bring Home the Glory (ft. Sara Skinner)',
    link: 'https://musescore.com/dzikoysk/bringhometheglory'
  },
  {
    title: 'Neeko Theme (arr. chillOwlPiano)',
    description: 'League of Legends - Neeko, the Curious Chameleon',
    link: 'https://musescore.com/dzikoysk/neeko'
  },
  {
    title: 'Likey (arr. Pianella & DooPiano)',
    description: 'TWICE (트와이스)',
    link: 'https://musescore.com/user/28577923/scores/10740871'
  }
]

export default function Music() {
  return (
    <>
      <Heading pb={4}>Transcriptions</Heading>
      <Stack flexWrap={'wrap'} w={'min(500px, 100%)'} maxWidth={'min(100%, 500px)'}>
        {transcriptions.map((transcription, index) => (
          <MusicBox
            key={index}
            title={transcription.title}
            description={transcription.description}
            link={transcription.link}
          />
        ))}
      </Stack>
      <Heading py={4}>Arrangements</Heading>
      <Stack flexWrap={'wrap'} w={'min(500px, 100%)'} maxWidth={'min(100%, 500px)'}>
        <MusicBox
          title={'Awaken'}
          description={'League of Legends - Awaken (ft. Valerie Broussard)'}
          link={'https://musescore.com/dzikoysk/awaken'}
        />
      </Stack>
    </>
  )
}

interface MusicBoxProps {
  title: string
  description: string
  link: string
}

const MusicBox = ({ title, description, link}: MusicBoxProps) => {
  return (
    <Stack
      bgColor={'#0c0c0c'}
      padding={4}
      rounded={'md'}
      cursor={'pointer'}
      _hover={{
        transform: 'scale(1.01)',
        transition: 'transform 0.2s ease-in-out'
      }}
      onClick={() => window.open(link, '_blank')}
    >
      <Heading as={'h4'} size={'sm'} color={'purple.300'} pr={2}>{title}</Heading>
      <Text fontSize={'sm'}>{description}</Text>
    </Stack>
  )
}
