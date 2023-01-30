
import React, { useLayoutEffect, useRef, useEffect} from 'react'
import {Box,Button,Flex,Text,Img} from '@chakra-ui/react'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '../../isomorphicEffect';

gsap.registerPlugin(ScrollTrigger);

function DataBase () {
  const database = useRef();
  
  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
    gsap.from(".databaseItem", {y: -2000, duration:1, scale:0.5, delay:1,stagger:.3 });  
      }, database);
    
    return () => ctx.revert();
  }, []);

  return (
  <Box border="solid 2px " borderRadius='40px' m='2%'>
    <Flex justifyContent='center' bgColor='black' borderRadius='37px 37px 0 0'>
    <Text fontSize="40px" fontWeight="semibold" textAlign="center"
        color="rgba(72, 168, 242, 0.735)"
      >
        Data base
      </Text>
      </Flex>
    <Flex wrap='wrap' ref={database}>
    <Box className="databaseItem"
      m="3%" border="solid 2px rgba(72, 168, 242, 0.735)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgba(72, 168, 242, 0.735)" borderRadius=" 18px  18px 0 0"
      >
        Prisma
      </Text>
      <Img ml="20px" mb="10px" mr="20px"
        w="250px" h="250px"
        src="https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/userPicture%2Fprisma.png?alt=media&token=f974dcc8-0203-4b78-a621-8e3611331c1f"
      />
    </Box>
    <Box
      m="3%" border="solid 2px rgba(72, 168, 242, 0.735)" borderRadius="20px"
      boxShadow="30px 10px black" className='databaseItem'
    >
      <Text  fontSize="30px"  bgColor="black"  fontWeight="semibold"
        textAlign="center" mb="10px" color="rgba(72, 168, 242, 0.735)" 
        borderRadius=" 18px  18px 0 0"
      >
        Sequalize
      </Text>
      <Img
        ml="20px" mb="10px" mr="10px" w="250px" h="250px"
        src="https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/userPicture%2Fsequalize.png?alt=media&token=b8e7ae3a-cf3e-40d7-b3e1-0c5eb7cd84e8"
      />
    </Box>
    <Box
    className='databaseItem'
      m="3%" border="solid 2px rgba(72, 168, 242, 0.735)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgba(72, 168, 242, 0.735)" borderRadius=" 18px  18px 0 0"
      >
        Postgres
      </Text>
      <Img
        ml="20px" mb="10px" mr="20px" w="250px" h="250px"
        src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/userPicture%2FpostGres.png?alt=media&token=549d5ebf-8f1b-4b32-86d5-0a8d47baabc5'
      />
    </Box>
    <Box
    className='databaseItem'
      m="3%" border="solid 2px rgba(72, 168, 242, 0.735)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgba(72, 168, 242, 0.735)" borderRadius=" 18px  18px 0 0"
      >
        Mongo DB
      </Text>
      <Img
        ml="20px" mb="10px" mr="20px" w="300px" h="200px"
        src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/MongoDB_logo_PNG2.png?alt=media&token=7534ebee-a49d-4a9a-9b72-64925f6a05ab'
      />
    </Box>
  </Flex>
</Box>
  )
}

function BackEnd () {
  
  const backend = useRef(null);
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {

    gsap.from(
      ".backendItem",
      {y: -5000, duration:1, scale:0.5,stagger:.3,
         scrollTrigger: {
          trigger: ".backendItem",
          toggleActions:'restart none none none'
        }
      }
    );
    },backend)
  }, []);
  return (
  <Box border="solid 2px rgb(8, 226, 8)" borderRadius='40px' m='2%' >
    <Flex justifyContent='center' bgColor='black' borderRadius='37px 37px 0 0'>
    <Text fontSize="40px" fontWeight="semibold" textAlign="center"
        color="rgb(8, 226, 8)"
      >
        Back-end
      </Text>
      </Flex>
    <Flex wrap='wrap' ref={backend} >
    <Box className="backendItem"
      m="3%" border="solid 2px rgb(8, 226, 8)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgb(8, 226, 8)" borderRadius=" 18px  18px 0 0"
      >
        Trpc
      </Text>
      <Img ml="20px" mb="10px" mr="20px"
        w="250px" h="250px"
        src="https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/trpc.svg?alt=media&token=fc94b3af-7361-4a5f-ab40-f4cbec701d3e"
      />
    </Box>
    <Box
      m="3%" border="solid 2px rgb(8, 226, 8)" borderRadius="20px"
      boxShadow="30px 10px black" className='backendItem'
    >
      <Text  fontSize="30px"  bgColor="black"  fontWeight="semibold"
        textAlign="center" mb="10px" color="rgb(8, 226, 8)" 
        borderRadius=" 18px  18px 0 0"
      >
        Express
      </Text>
      <Img
        ml="20px" mb="10px" mr="10px" w="250px" h="100px"
        src="https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/Expressjs.png?alt=media&token=4b346434-14b3-4ca6-9fa7-bacd326b3e40"
      />
    </Box>
    <Box
    className='backendItem'
      m="3%" border="solid 2px rgb(8, 226, 8)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgb(8, 226, 8)" borderRadius=" 18px  18px 0 0"
      >
        Node js
      </Text>
      <Img
        ml="20px" mb="10px" mr="20px" w="250px" h="150px"
        src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/nodejs-1-logo.png?alt=media&token=935c6f39-3450-4cb1-9dca-c5ce4810c6f5'
      />
    </Box>
    <Box
    className='backendItem'
      m="3%" border="solid 2px rgb(8, 226, 8)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgb(8, 226, 8)" borderRadius=" 18px  18px 0 0"
      >
        javaScript
      </Text>
      <Img
        ml="20px" mb="10px" mr="20px" w="250px" h="250px"
        src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/javascript-logo-1.png?alt=media&token=73fe2ce5-2fd4-44e0-9821-4d05b7697d60'
      />
    </Box>
  </Flex>
</Box>
  )
}

function FrontEnd () {
  const frontend = useRef(null);
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {

    gsap.fromTo(
      ".frontendItem",
      { rotation: 0 },
      {
        rotation: 360,
        duration: 3,
        stagger:.2,
        scrollTrigger: {
          trigger: ".frontendItem",
          toggleActions:'restart none none none'
        },
      }
    );
    },frontend)
  }, []);

  return (
  <Box border="solid 2px rgb(229, 245, 7)" borderRadius='40px' m='2%' ref={frontend}>
    <Flex justifyContent='center' bgColor='black' borderRadius='37px 37px 0 0'>
    <Text fontSize="40px" fontWeight="semibold" textAlign="center"
        color="rgb(229, 245, 7)"
      >
        Front-end
      </Text>
      </Flex>
    <Flex wrap='wrap'>
    <Box className="frontendItem"
      m="3%" border="solid 2px rgb(229, 245, 7)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgb(229, 245, 7)" borderRadius=" 18px  18px 0 0"
      >
        Next Js
      </Text>
      <Img ml="20px" mb="10px" mr="20px"
        w="250px" h="250px"
        src="https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/next-js-logo-7929BCD36F-seeklogo.com.png?alt=media&token=fe2ddda8-6de0-4920-b8bf-c397d94cb096"
      />
    </Box>
    <Box
      m="3%" border="solid 2px rgb(229, 245, 7)" borderRadius="20px"
      boxShadow="30px 10px black" className='frontendItem'
    >
      <Text  fontSize="30px"  bgColor="black"  fontWeight="semibold"
        textAlign="center" mb="10px" color="rgb(229, 245, 7)" 
        borderRadius=" 18px  18px 0 0"
      >
        React
      </Text>
      <Img
        ml="20px" mb="10px" mr="10px" w="250px" h="250px"
        src="https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/React-icon.svg.png?alt=media&token=22f14c44-9923-4660-8671-d3167105422c"
      />
    </Box>
    <Box
    className='frontendItem'
      m="3%" border="solid 2px rgb(229, 245, 7)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgb(229, 245, 7)" borderRadius=" 18px  18px 0 0"
      >
        Redux 
      </Text>
      <Img
        ml="20px" mb="10px" mr="20px" w="250px" h="250px"
        src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/redux%202.png?alt=media&token=87ee26dc-bc47-416a-bca3-db1b01c3596b'
      />
    </Box>
    <Box
    className='frontendItem'
      m="3%" border="solid 2px rgb(229, 245, 7)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgb(229, 245, 7)" borderRadius=" 18px  18px 0 0"
      >
        javaScript
      </Text>
      <Img
        ml="20px" mb="10px" mr="20px" w="250px" h="250px"
        src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/javascript-logo-1.png?alt=media&token=73fe2ce5-2fd4-44e0-9821-4d05b7697d60'
      />
    </Box>
    <Box
    className='frontendItem'
      m="3%" border="solid 2px rgb(229, 245, 7)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgb(229, 245, 7)" borderRadius=" 18px  18px 0 0"
      >
        HTML
      </Text>
      <Img
        ml="20px" mb="10px" mr="20px" w="250px" h="250px"
        src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/html.png?alt=media&token=901967dd-ec96-49e0-8cd9-05bb0ce1154d'
      />
    </Box>
    <Box
    className='frontendItem'
      m="3%" border="solid 2px rgb(229, 245, 7)" borderRadius="20px" 
      boxShadow="30px 10px black"
    >
      <Text fontSize="30px" bgColor="black" fontWeight="semibold" textAlign="center"
       mb="10px" color="rgb(229, 245, 7)" borderRadius=" 18px  18px 0 0"
      >
        CSS
      </Text>
      <Img
        ml="20px" mb="10px" mr="20px" w="250px" h="250px"
        src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/css.png?alt=media&token=74c9bddc-97c3-415f-b91c-343e2b6aabb6'
      />
    </Box>
  </Flex>
</Box>
  )
}

function App() {
  const imgRef = useRef(null);
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {

    gsap.fromTo(
      ".App",
      { rotation: 0 },
      {
        rotation: 180,
        duration: 3,
        stagger:2,
        scrollTrigger: {
          trigger: ".App",
          toggleActions:'restart none none none'
        },
      }
    );
    },imgRef)
  }, []);
  return (
    <div ref={imgRef}>
      <div className="helper"></div>
      <Img w='200px' h='200px' border='solid blue 2px' src='*' className="App" alt="logo" ref={imgRef} />
      <Img w='200px' h='200px' border='solid blue 2px' src='*' className="App" alt="logo" ref={imgRef} />
    </div>
  );
}

export default function Tecnologies () {
    const tecnologies = useRef();
  
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
     
      gsap.from(tecnologies.current, {y: 400, duration:2, ease: 'elastic'
    });  
  
        }, tecnologies);
      
      return () => ctx.revert();
    }, []);
  return (
    <Box
      onS
      ref={tecnologies}
      bgGradient="linear(to-r, red.500, yellow.500)"
      w="90%"
      ml="5%"
      mr="5%"
      mt="5%"
      borderRadius="30px"
      border="solid 4px rgba(72, 168, 242, 0.735)"
    >
      <Flex justifyContent="center">
        <Text fontSize="45px" fontWeight="semibold">
          Tecnologies
        </Text>
      </Flex>
      <DataBase/>
      <BackEnd/>
      <FrontEnd/>
      <App/>
    </Box>
  );
}