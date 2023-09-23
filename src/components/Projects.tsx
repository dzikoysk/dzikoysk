import {Flex, Heading, Link, Stack, Text} from "@chakra-ui/react";

enum Role {
  OWNER = 'owner',
  MEMBER = 'member',
  CONTRIBUTOR = 'contributor'
}

const projects = [
  {
    group: 'Reposilite',
    repositories: [
      {
        title: 'dzikoysk/reposilite',
        description: 'Lightweight and easy-to-use repository management software dedicated for the Maven based artifacts in the JVM ecosystem.',
        link: 'https://github.com/dzikoysk/reposilite',
        role: Role.OWNER
      }
    ]
  },
  {
    group: 'Javalin',
    repositories: [
      {
        title: 'javalin/javalin',
        description: 'Simple and modern Java and Kotlin web framework',
        link: 'https://github.com/javalin/javalin',
        role: Role.MEMBER
      },
      {
        title: 'javalin/javalin-openapi',
        description: 'Annotation processor for compile-time OpenAPI & JsonSchema, with out-of-the-box support for Javalin 5.x, Swagger & ReDoc',
        link: 'https://github.com/javalin/javalin-openapi',
        role: Role.OWNER
      },
      {
        title: 'javalin/javalin-routing-extensions',
        description: 'Set of alternative routing implementations for Javalin 5.x ',
        link: 'https://github.com/javalin/javalin-routing-extensions',
        role: Role.OWNER
      }
    ]
  },
  {
    group: 'Panda',
    repositories: [
      {
        title: 'panda-lang/panda',
        description: 'Proof of concept of modern and stylish interpreted programming language for the JVM',
        link: 'https://github.com/panda-lang/panda',
        role: Role.OWNER
      },
      {
        title: 'panda-lang/light',
        description: 'Light is English-like programming language built using the Panda Framework',
        link: 'https://github.com/panda-lang/light',
        role: Role.OWNER
      },
      {
        title: 'panda-lang/hub',
        description: 'Panda Hub is the official package registry for amazing Panda (+JVM) based projects on top of the Ktor & Next.js frameworks',
        link: 'https://github.com/panda-lang/hub',
        role: Role.OWNER,
      }
    ]
  },
  {
    group: 'General',
    repositories: [
      {
        title: 'dzikoysk/sqiffy',
        description: 'Experimental compound SQL framework with type-safe DSL API generated at compile-time from annotation based scheme diff ',
        link: 'https://github.com/dzikoysk/sqiffy',
        role: Role.OWNER
      },
      {
        title: 'reposilite-playground/exposed-upsert',
        description: 'Upsert DSL extension for Exposed, Kotlin SQL framework ',
        link: 'https://github.com/reposilite-playground/exposed-upsert',
        role: Role.OWNER
      },
      {
        title: 'dzikoysk/expressible',
        description: 'Utility library dedicated for functional & non-functional codebases to simplify modelling of success and failure responses for Java/Kotlin',
        link: 'https://github.com/dzikoysk/expressible',
        role: Role.OWNER
      },
      {
        title: 'dzikoysk/presence-of-mind',
        description: 'Personal utility Android app used to organize private backlog by mixing daily schedule tasks with habits, long-term goals, notes & things to learn',
        link: 'https://github.com/dzikoysk/presence-of-mind',
        role: Role.OWNER
      },
      {
        title: 'dzikoysk/khangul',
        description: 'Hangul processor for Kotlin Multiplatform & JavaScript projects, based on reverse-engineered enhanced version of Branah keyboard algorithm',
        link: 'https://github.com/dzikoysk/khangul',
        role: Role.OWNER
      },
      {
        title: 'dzikoysk/cdn',
        description: 'Simple and fast property-based configuration library for JVM apps, similar to JSON5 standard, also with JSON & YAML-like targets',
        link: 'https://github.com/dzikoysk/cdn',
        role: Role.OWNER
      },
    ]
  }
]

type ProjectKey = keyof typeof projects

export default function Projects() {
  return (
    <>
      <Link href={'#projects'}>
        <Heading id={'projects'} pb={4}>Projects</Heading>
      </Link>
      <Stack spacing={6}>
        {projects.map((project, index) => (
          <Stack
            key={index}
            w={'full'}
            alignItems={'center'}
            spacing={1}
            border={'1px dashed #161616'}
            rounded={'xs'}
            py={6}
            maxW={'600px'}
          >
            <Heading size="md" color={'purple.300'}>
              {project.group}
            </Heading>
            <Flex flexWrap={'wrap'} w={'full'} justifyContent={'center'}>
              {project.repositories.map((repository, index) => (
                <Link key={index} href={repository.link} minW='200px' w='40%'>
                  <Stack
                    textAlign={'center'}
                    paddingTop={6}
                    paddingX={2}
                  >
                    <Heading size="sm">{repository.title}</Heading>
                    <Text fontSize="xs">{repository.description}</Text>
                  </Stack>
                </Link>
              ))}
            </Flex>
          </Stack>
        ))}
      </Stack>
      <Heading py={4}>Archived</Heading>
      <Link href={'https://github.com/dzikoysk-playground'} color={'purple.300'} fontSize={'sm'}>
        ~ dzikoysk's playground
      </Link>
    </>
  )
}
