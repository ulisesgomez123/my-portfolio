import React, { useLayoutEffect, useRef} from 'react'
import {gsap} from 'gsap/dist/gsap';
import {Box,Button,Flex,Text,Img,Link} from '@chakra-ui/react'


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
      bgGradient="linear(to-r, red.500, yellow.500)" w="90%" ml="5%" mr="5%" mt="5%"
      borderRadius="30px" mb='30px'
      border="solid 4px rgba(72, 168, 242, 0.735)"
    >
      <Flex justifyContent="center">
        <Text fontSize="45px" fontWeight="semibold">
          Contact
        </Text>
      </Flex>
      <Flex wrap='wrap' justifyContent='space-around'>
    <Box w='200px' p='5px' m='20px'>
      <Flex justifyContent='center'>
        <Text fontSize='30px' color='whiteAlpha.700' fontWeight='semibold' mb='10px'>WhatsApp</Text>
      </Flex>
      <Img src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/WhatsApp-logo.png?alt=media&token=ef53e6c2-f2b4-448a-ab64-e18761034e99' 
      w='200px' h='130px' />
      <Flex justifyContent='center'>
        <Text fontSize='18px' color='whiteAlpha.700' fontWeight='semibold' mt='30px'>{`(+54) 3625-229651`}</Text>
      </Flex>
    </Box>
    <Link href='https://github.com/ulisesgomez123/'>
    <Box w='200px' m='20px' p='5px' >
      <Flex justifyContent='center'>
        <Text fontSize='30px' color='whiteAlpha.700' fontWeight='semibold' mb='10px'>Github</Text>
      </Flex>
      <Img src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/github.png?alt=media&token=1a984c15-7696-4de7-a83c-f089f09de005' 
      w='200px' h='200px' />
    </Box>
    </Link>
    <Link href='https://www.linkedin.com/in/ulises-gomez-51a134254/?locale=en_US'>
    <Box w='200px' p='5px' m='20px'>
      <Flex justifyContent='center'>
        <Text fontSize='30px' color='whiteAlpha.700' fontWeight='semibold' mb='10px'>LinkedIn</Text>
      </Flex>
      <Img src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/linkedIn.png?alt=media&token=c2169f6e-3823-41e4-a387-9bbd7a8081de' 
      w='200px' h='200px' />
    </Box>
    </Link>
 </Flex>
    </Box>
  );
}