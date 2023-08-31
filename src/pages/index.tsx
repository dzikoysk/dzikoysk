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
        justifyContent={{
          lg: 'space-between'
        }}
        overflowX={'hidden'}
        flexDirection={{
          base: 'column',
          lg: 'row'
        }}
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
            src={'/img/noise_raw.jpg'}
            loading={'eager'}
            opacity={currentPage !== undefined ? 0.33 : 0.22}
            minW={{ base: 'max(100vw, 100vh)' }}
            minH={{ base: 'max(100vw, 100vh)' }}
            objectFit={'cover'}
            transition={'opacity 0.25s ease-in-out'}
            animation={`${rotation} 1300s linear infinite`}
          />
        </Box>
        <Flex
          flex={{ lg: 2 }}
          h={{ lg: '100vh' }}
          minW={'60%'}
          alignItems={'center'}
          justifyContent={{
            lg: 'space-around'
          }}
          flexDirection={{
            base: 'column',
            lg: 'row'
          }}
        >
          <Stack
            onClick={() => setCurrentPage(undefined)}
            cursor='pointer'
            paddingX={4}
            paddingY={12}
            textAlign={{
              base: 'center',
              lg: 'left'
            }}
          >
            <Text w={'full'} fontFamily={'monospace'} color={'purple.300'}>
              /dzikoysk
            </Text>
            <Heading as='h1' size='2xl' fontFamily={'Livvic'}>
              INDEX
            </Heading>
          </Stack>
          <Stack alignItems={'start'} spacing={6} paddingBottom={{ base: 12, lg: 0 }} paddingX={4}>
            <IndexCard
              title='About'
              description="Who I am and what I do"
              onClick={() => togglePage(SelectedPage.About)}
            >
              <Text fontWeight={'semibold'}>External links &#123;</Text>
              <Stack spacing={0} paddingLeft={4}>
                <Link href={'https://github.com/dzikoysk'}>~ github.com/dzikoysk</Link>
                <Link href={'https://twitter.com/dzikoysk'}>~ twitter.com/dzikoysk</Link>
                <Link href={'https://linkedin.com/in/dzikoysk'}>~ linkedin.com/dzikoysk</Link>
                <Link href={'https://stackoverflow.com/dzikoysk'}>~ stackoverflow.com/dzikoysk</Link>
                <Link href={'https://musescore.com/dzikoysk'}>~ musescore.com/dzikoysk</Link>
              </Stack>
              <Text fontWeight={'semibold'}>&#125;</Text>
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
            w={'full'}
            minH={'full'}
            maxH={{
              lg: '100vh'
            }}
            overflowY={{
              lg: 'auto'
            }}
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
      paddingX={4}
      rounded={'lg'}
      w='full'
      flexBasis={'100%'}
      justifyContent={{
        base: 'space-between',
        lg: 'flex-start'
      }}
      cursor={'pointer'}
      onClick={onClick}
    >
      <Heading
        as='h2'
        size={'xs'}
        minW={{ base: '90px', lg: 28}}
        pt={1.5}
        pl={2}
        fontWeight={'semibold'}
        fontFamily={'Livvic'}
        textTransform={'uppercase'}
      >
        {title}
      </Heading>
      <Text color={'purple.300'}>
        /
      </Text>
      <Stack
        paddingLeft={{ base: 6, lg: 10}}
        w={{ base: '60%', lg: 'full' }}
      >
        <Heading
          as='h3'
          size={'md'}
          fontFamily={'Lato'}
          w={'full'}
          textAlign={{
            base: 'right',
            lg: 'left'
          }}
        >
          {description}
        </Heading>
        {children && <Stack
          color={'purple.300'}
          fontWeight=''
          paddingTop={2}
          spacing={0}
          fontFamily={'monospace'}
          fontSize={{
            base: 'xs',
            lg: 'xs'
          }}
          textAlign={{
            base: 'right',
            lg: 'left'
          }}
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
      style={{
        height: '100%',
      }}
    >
      {props.children}
    </motion.div>
  )
})
