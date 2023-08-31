import {Box, Heading, Link, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <>
      <Heading>Contact</Heading>
      <Box
        marginY={4}
        padding={4}
        border={'1px dashed #B794F4'}
        rounded={'xs'}
        fontFamily={'monospace'}
        width={'min(100%, 500px)'}
      >
        <Text>$ contact dump &#123;</Text>
        <UnorderedList paddingLeft={4} paddingY={4}>
          <ListItem>
            Email: <Text as={'span'} color={'purple.300'}>
              <Link href={'mailto:dzikoysk@dzikoysk.net'}>
                dzikoysk@dzikoysk.net
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            Discord: <Text as={'span'} color={'purple.300'}>dzikoysk</Text>
          </ListItem>
          <ListItem>
            Discord server: <Text as={'span'} color={'purple.300'}>
              <Link href={'https://discord.gg/qGRqmGjUFX'}>Panda & Projects</Link>
          </Text>
          </ListItem>
        </UnorderedList>
        <Text>&#125; End of Contact Dump ✧ʕ̢̣̣̣̣̩̩̩̩·͡˔·ོɁ̡̣̣̣̣̩̩̩̩✧</Text>
      </Box>
    </>
  )
}
