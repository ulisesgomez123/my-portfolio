import React, { useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import {Box,Text,Img,Button,Flex} from '@chakra-ui/react'
import '../img/programador.png'

export default function Presentation() {
    const name = useRef();
    const profesion = useRef();
    const box = useRef();
    const img = useRef();
    
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
      gsap.from(name.current, {y: -100, duration:2, scale: .2});  
      gsap.from(profesion.current, {xPercent: -150, duration:2, ease: 'bounce.out', delay:2});  
      gsap.to(box.current, {duration:1, delay:2.5 , backgroundColor:'rgba(71, 72, 73, 0.735)'});  
      gsap.from(img.current, {duration:1.5, delay:2, y: 500, scale:.5}); 
        }, name);
      
      return () => ctx.revert();
    }, []);
  
    return (
    <Box>
     <Box textAlign='center' ref={box} m='20px 25% 0 25%' borderRadius='10px'>
        <Text m='3% 0 0 0' className="my-name" ref={name} fontSize='40px' fontWeight='semibold' color='rgba(72, 168, 242, 0.735)'>Ulises E. E. Gómez</Text>
        <Text m='0' className="my-name" ref={profesion} fontSize='40px' fontWeight='semibold' color='ghostwhite'>Full-Stack Web Developer</Text>
     </Box>
     <Flex justifyContent='center'>
        <Img ref={img} src='https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/userPicture%2Fprogramador.png?alt=media&token=440e79ec-8ef2-4134-9f88-6e9517587279' 
        alt='developer' w='150px' h='120px' mt='10px'/>
     </Flex>
     </Box>
    );
}
