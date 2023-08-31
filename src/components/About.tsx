import {Heading, Stack, Text} from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <>
      <Heading paddingBottom={4}>
        About
      </Heading>
      <Stack width={'min(500px, 100%)'} >
        <Text>
          Hobbyist <Text as='span' color={'purple.300'}>'full-of-nothing-stack'</Text> developer involved in many open source activities. 💕
        </Text>
        <Text>
          I'm programming since 2014 - mainly working with JVM languages <Text as={'span'} fontWeight={'semibold'} fontStyle={'italic'}>(Kotlin, Java, Scala)</Text>,
          but due to product oriented approach I'm also familiar with several frontend technologies.
          Occasionally I'm playing with gamedev related stuff such as OpenGL-based rendering engines, networking & game assets.
        </Text>
      </Stack>
    </>
  )
}
