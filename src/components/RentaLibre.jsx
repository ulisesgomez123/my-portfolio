import React, { useLayoutEffect, useRef, useState} from 'react'
import gsap from 'gsap';
import {Box,Text,Img,Button,Flex,Link} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: "530px",
  md: "700px",
  lg: "960px",
  xl: "1200px",
};
const theme = extendTheme({ breakpoints })

export default function RentaLibre () {
  const [state,setState] = useState({
    hover:false,
    mount:true,
  })
  const proyects = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (state.hover && !state.mount) {
    gsap.from(proyects.current, {y: -100, duration:1, scale: .2});  
      }
      if (!state.hover && !state.mount) {
        gsap.to(proyects.current, {x: -800, duration:1.5, scale: .2});  
        }
        if (state.mount) {
          gsap.to(proyects.current, {x: -1000});  
          }
      }, proyects);
    
    return () => ctx.revert();
  },[state]);
  return (
    <Box m='3%' w={{base:"200px",sm:'400px'}}>
    <Box w={{base:"200px",sm:'400px'}} h={{base:"200px",sm:'400px'}} 
    onMouseEnter={()=>setState({hover:true,mount:false})} 
    onMouseLeave={()=>setState({hover:false,mount:false})}
    >
      <Img
        w={{base:"200px",sm:'400px'}} h={{base:"200px",sm:'400px'}}
        position='absolute'
        objectFit='cover'
        zIndex={-1}
        borderRadius="20px"
        border="solid black 2px"
        src="https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/userPicture%2FWhatsApp%20Image%202023-01-12%20at%2010.52.25.jpeg?alt=media&token=0ffea6a0-df06-4db4-96d3-3d8886a7b072"
      />
<Box w={{base:"200px",sm:'400px'}} h={{base:"200px",sm:'400px'}} bgColor='rgba(0, 0, 0, 0.7)' borderRadius="20px"
      ref={proyects}
       >
      <Flex  justifyContent='center'>
        <Text color="white" fontSize='30px' fontWeight='semibold'>RentaLibre</Text>
      </Flex>
        <Flex justifyContent='space-around' mt='25px'>
          <Link href="https://rentalibre.vercel.app/" color="white" fontSize={{base:"12px",sm:'20px'}} fontWeight='semibold'>
            ???? go to site
          </Link>
          <Link href="https://github.com/ulisesgomez123/PF-RentaLibre-HENRY" color="white" fontSize={{base:"12px",sm:'20px'}} fontWeight='semibold'>
          ????Repository
          </Link>
        </Flex>
        {/* <Flex justifyContent='center' w='100%' h='100%' alignItems='center'>
        <Button mb='40px'>description</Button>
        </Flex> */}
        </Box>
    </Box>
    </Box>
  );
}