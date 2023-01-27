import React, { useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import {Box,Button,Flex,Text} from '@chakra-ui/react'

export default function Contact () {
    const contact = useRef();
  
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
      gsap.from(contact.current, {y: 500, duration:1.3, ease: 'bounce.out'});  
  
        }, contact);
      
      return () => ctx.revert();
    }, []);
  return (
    <Box
      ref={contact}
      bgGradient="linear(to-r, red.500, yellow.500)"
      w="90%"
      h="1000px"
      ml="5%"
      mr="5%"
      mt="5%"
      borderRadius="30px"
      border="solid 4px rgba(72, 168, 242, 0.735)"
    >
      <Flex justifyContent="center">
        <Text fontSize="45px" fontWeight="semibold">
          Contact
        </Text>
      </Flex>
    </Box>
  );
}