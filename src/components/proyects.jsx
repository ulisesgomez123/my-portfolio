import React, { useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import {Box,Button,Flex,Text} from '@chakra-ui/react'
import MovieApp from '../components/movieApp'
import DogsApp from '../components/DogsApp'
import RentaLibre from '../components/RentaLibre'

export default function Proyects () {

  const proyects = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
    gsap.from(proyects.current, {y: -100, duration:1, scale: .2});  

      }, proyects);
    
    return () => ctx.revert();
  }, []);
  return (
    <Box
      bgGradient="linear(to-r, red.500, yellow.500)"
      w="90%"
      h="1000px"
      ml="5%"
      mr="5%"
      mt="5%"
      borderRadius="30px"
      border="solid 4px rgba(72, 168, 242, 0.735)"
      ref={proyects}
    >
      <Flex justifyContent="center">
        <Text fontSize="45px" fontWeight="semibold">
          Proyects
        </Text>
      </Flex>
      <Flex justifyContent='space-around' wrap='wrap' >
      <MovieApp/>
      <DogsApp/>
      <RentaLibre/>
      </Flex>
    </Box>
  );
}