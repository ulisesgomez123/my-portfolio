import React, { useLayoutEffect, useRef, useState} from 'react'
import {Box,Flex,Text,Button, baseTheme} from '@chakra-ui/react'
import Presentation from '../components/presentation'
import Proyects from '../components/proyects'
import Tecnologies from '../components/tecnologies'
import Contact from '../components/contact'
import gsap from 'gsap';
import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: "530px",
  md: "700px",
  lg: "960px",
  xl: "1200px",
};
const theme = extendTheme({ breakpoints })


export default function Home() {


  const [state,setState] = useState({
    proyects: false,
    tecnologies: false,
    contact:false
  })

  const buttons = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
    gsap.from(buttons.current, {y: -100, duration:2, scale: .2});  

      }, buttons);
    
    return () => ctx.revert();
  }, []);
  return (
    <Box>
      <Box ref={buttons}>
      <Flex justifyContent="flex-end">
        <Flex  w={{base:'90%',sm:'30%'}}  m={{base:'2% 5% 0 5%',sm:'1% 1% 0 0'}}>
          <Button
            className='button'
            onClick={()=>setState({proyects:!state.proyects,tecnologies:false,constact:false})}
            m="5px 2% 5px 2%"
            color="ghostwhite"
            fontSize={{base:"16px",sm:'20px'}}
            transition='margin-right 0.5s'
            _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)', mr:'2%'}}
            borderRadius="15px"
            bgColor="rgba(72, 168, 242, 0.735)"
          >
            Proyects
          </Button>
          <Button
            onClick={()=>setState({proyects:false,tecnologies:!state.tecnologies,contact:false})}
            m="5px 2% 5px 2%"
            color="ghostwhite"
            fontSize={{base:"16px",sm:'20px'}}
            transition='margin-right 0.5s, margin-left 0.5s'
            _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)',mr:'2%', ml:'2%'}}
            borderRadius="15px"
            bgColor="rgba(72, 168, 242, 0.735)"
          >
            Tecnologies
          </Button>
          <Button
          onClick={()=>setState({proyects:false,tecnologies:false,contact:!state.contact})}
            m="5px 0 5px 2%"
            color="ghostwhite"
            fontSize={{base:"16px",sm:'20px'}}
            transition='margin-left 0.5s'
            _hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)',ml:'2%'}}
            borderRadius="15px"
            bgColor="rgba(72, 168, 242, 0.735)"
          >
            Contact
          </Button>
        </Flex>
      </Flex>
    </Box>
    <Presentation/>
   { state.proyects ? <Proyects/> : null}
   { state.tecnologies ? <Tecnologies/> : null}
   { state.contact ? <Contact/> : null}
    </Box>
  );
}
