import {Box, Heading, Link as ChakraLink, List, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import Link from 'next/link'
import React from "react";

export default function Contact() {
  return (
    <>
      <Link href={'#contact'}>
        <Heading id={'contact'}>Contact</Heading>
      </Link>
      <Box
        marginY={4}
        padding={4}
        border={'1px dashed #B794F4'}
        rounded={'xs'}
        fontFamily={'monospace'}
        width={'min(100%, 500px)'}
      >
        <Text>
          $ contact dump &#123;
        </Text>
        <UnorderedList paddingLeft={4} paddingY={4}>
          <ListItem>
            Email: <Text as={'span'} color={'purple.300'}>
              <ChakraLink href={'mailto:dzikoysk@dzikoysk.net'}>
                dzikoysk@dzikoysk.net
              </ChakraLink>
            </Text>
          </ListItem>
          <ListItem>
            Discord: <Text as={'span'} color={'purple.300'}>dzikoysk</Text>
          </ListItem>
          <ListItem>
            Discord server: <Text as={'span'} color={'purple.300'}>
              <ChakraLink href={'https://discord.gg/qGRqmGjUFX'}>
                Panda & Projects
              </ChakraLink>
          </Text>
          </ListItem>
        </UnorderedList>
        <Text>
          &#125; End of Contact Dump ✧ʕ̢̣̣̣̣̩̩̩̩·͡˔·ོɁ̡̣̣̣̣̩̩̩̩✧
        </Text>
      </Box>
    </>
  )
}
