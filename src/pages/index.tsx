import Head from 'next/head'
import {
  Box, BoxProps, Collapse,
  Flex, forwardRef,
  Heading, Image, keyframes,
  Link,
  Stack,
  Text, useDisclosure
} from "@chakra-ui/react";
import React, {PropsWithChildren, useState} from "react";
import { motion } from "framer-motion";
import {useRouter} from "next/router";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Music from "@/components/Music";
import {Content} from "next/dist/compiled/@next/font/dist/google";
import Contact from "@/components/Contact";

const rotation = keyframes({
  'from': {
    transformOrigin: 'center center',
    transform: 'rotate(0deg) scale(1.5)'
  },
  'to': {
    transform: 'rotate(360deg) scale(1.5142)'
  }
})

enum SelectedPage {
  About = 'about',
  Projects = 'projects',
  Music = 'music',
  Contact = 'contact',
}

export default function Index() {
  // #212123
  // #151515
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState<SelectedPage | undefined>(undefined)

  const togglePage = (selectedPage: SelectedPage) => {
    setCurrentPage(currentPage === selectedPage ? undefined : selectedPage)
    router.push('/' + (currentPage === selectedPage ? `` : `#${selectedPage}`))
  }

  return (
    <>
      <Head>
        <title>~ dzikoysk :wq</title>
        <link rel="icon" href="/img/paw.png" />
      </Head>
      <Flex
        w={'full'}
        maxW={'100vw'}
        h={'100vh'}
        color={'white'}
        justifyContent={'space-between'}
        overflowX={'hidden'}
      >
        <Box
          position={'absolute'}
          w={'full'}
          h={'full'}
          zIndex={-1}
          overflow={'hidden'}
          bgColor={'black'}
        >
          <Image
            // src={'/img/concrete-wall-texture.jpg'}
            src={'/img/noise.jpg'}
            opacity={currentPage !== undefined ? 0.2 : 0.1}
            w={'max(100%, 100vh)'}
            h={'max(100%, 100vw)'}
            objectFit={'cover'}
            transition={'opacity 0.25s ease-in-out'}
            animation={`${rotation} 1080s linear infinite`}
          />
        </Box>
        <Flex
          flex={2}
          h={'100vh'}
          alignItems={'center'}
          justifyContent={'space-around'}
          minW={'60%'}
        >
          <Stack onClick={() => setCurrentPage(undefined)} cursor='pointer' padding={4}>
            <Text w={'full'} fontFamily={'monospace'} color={'purple.300'}>
              /dzikoysk
            </Text>
            <Heading as='h1' size='2xl' fontFamily={'Livvic'}>
              INDEX
            </Heading>
          </Stack>
          <Stack alignItems={'start'} spacing={6} paddingRight={4}>
            <IndexCard
              title='About'
              description="Who I am and what I do"
              onClick={() => togglePage(SelectedPage.About)}
            >
              <Text>External links:</Text>
              <Link href={'https://github.com/dzikoysk'}>~ github.com/dzikoysk</Link>
              <Link href={'https://twitter.com/dzikoysk'}>~ twitter.com/dzikoysk</Link>
              <Link href={'https://linkedin.com/in/dzikoysk'}>~ linkedin.com/dzikoysk</Link>
              <Link href={'https://stackoverflow.com/dzikoysk'}>~ stackoverflow.com/dzikoysk</Link>
              <Link href={'https://musescore.com/dzikoysk'}>~ musescore.com/dzikoysk</Link>
            </IndexCard>
            <IndexCard
              title='Projects'
              description="Things I've already done"
              onClick={() => togglePage(SelectedPage.Projects)}
            />
            <IndexCard
              title='Music'
              description="Arrangements and transcriptions"
              onClick={() => togglePage(SelectedPage.Music)}
            />
            <IndexCard
              title='Contact'
              description="Let's talk"
              onClick={() => togglePage(SelectedPage.Contact)}
            />
          </Stack>
        </Flex>
        <HorizontalCollapse show={currentPage !== undefined}>
          <Stack
            bgColor={'black'}
            color={'white'}
            h={'full'}
            maxH={'100vh'}
            overflowY={'auto'}
            w={'full'}
            justifyContent={'safe center'}
            alignItems={'safe center'}
            paddingX={10}
            paddingY={10}
          >
            <PageView page={currentPage!!} />
          </Stack>
        </HorizontalCollapse>
      </Flex>
    </>
  )
}

interface PageViewProps {
  page: SelectedPage
}

const PageView = ({ page }: PageViewProps) => {
  switch (page) {
    case SelectedPage.About:
      return <About />
    case SelectedPage.Projects:
      return <Projects />
    case SelectedPage.Music:
      return <Music />
    case SelectedPage.Contact:
      return <Contact />
    default:
      return <></>
  }
}

interface IndexCardProps extends PropsWithChildren {
  title: string
  description: string
  onClick?: () => void
}

const IndexCard = ({ title, description, onClick, children }: IndexCardProps) => {
  return (
    <Flex
      _hover={{bgColor: '#151515DD'}}
      paddingY={3}
      paddingX={8}
      rounded={'lg'}
      flexBasis={'100%'}
      w='full'
      cursor={'pointer'}
      onClick={onClick}
    >
      <Heading
        as='h2'
        size={'xs'}
        w={28}
        pt={1.5}
        fontWeight={'semibold'}
        fontFamily={'Livvic'}
        textTransform={'uppercase'}
      >
        {title}
      </Heading>
      <Text color={'purple.300'}>
        /
      </Text>
      <Stack paddingLeft={10}>
        <Heading as='h3' size={'md'} fontFamily={'Lato'}>
          {description}
        </Heading>
        {children && <Stack
          color={'#808085'}
          fontWeight=''
          paddingTop={2}
          spacing={0}
          fontFamily={'monospace'}
          fontSize='sm'
        >
          {children}
        </Stack>}
      </Stack>
    </Flex>
  )
}

interface HorizontalCollapseProps {
  show: boolean
}

const HorizontalCollapse = forwardRef<HorizontalCollapseProps, 'div'>((props, ref) => {
  const { show } = props
  const [hidden, setHidden] = useState<boolean>(!show)

  return (
    <motion.div
      ref={ref}
      hidden={hidden}
      initial={false}
      onAnimationStart={() => { setHidden(false)}}
      onAnimationComplete={() => setHidden(!show)}
      animate={{ width: show ? '100%' : 0 }}
    >
      {props.children}
    </motion.div>
  )
})
