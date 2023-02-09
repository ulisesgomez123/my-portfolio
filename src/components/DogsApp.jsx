import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Box, Text, Img, Button, Flex, Link } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: "530px",
  md: "700px",
  lg: "960px",
  xl: "1200px",
};
const theme = extendTheme({ breakpoints })

function PopUpComponent () {
  const popUp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        gsap.from(popUp.current, { xPercent: -100, duration: 2, ease:'elastic' });
    }, popUp);

    return () => ctx.revert();
  }, []);
  return (
    <Box  position="absolute" bgColor="white" w="80%" h="50%" zIndex={1} ref={popUp}>
    <Box textAlign='center' fontSize='40px' fontWeight='semibold' color='GrayText' 
     bgColor='blackAlpha.400'
    >
        Hola soy popUp 2
    </Box>
    </Box>
  )
}

export default function DogsApp() {
  const [state, setState] = useState({
    hover: false,
    mount: true,
  });
  const proyects = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (state.hover && !state.mount) {
        gsap.from(proyects.current, { y: -100, duration: 1, scale: 0.2 });
      }
      if (!state.hover && !state.mount) {
        gsap.to(proyects.current, { y: -800, duration: 1.5, scale: 0.2 });
      }
      if (state.mount) {
        gsap.to(proyects.current, { x: -3000 });
      }
    }, proyects);

    return () => ctx.revert();
  }, [state]);
  return (
    <Box
      w={{base:"200px",sm:'400px'}}
      h={{base:"200px",sm:'400px'}}
      onMouseEnter={() => setState({ hover: true, mount: false })}
      onMouseLeave={() => setState({ hover: false, mount: false })}
      m="3%"
    >
      <Img
        w={{base:"200px",sm:'400px'}}
        h={{base:"200px",sm:'400px'}}
        objectFit='cover'
        position="absolute"
        zIndex={-1}
        borderRadius="20px"
        border="solid black 2px"
        src="https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/userPicture%2F2777ad31-6e62-4eb6-809d-685bf53b0179.png?alt=media&token=6f218c0a-f538-46c8-a24b-bfc3fa231c88"
      />
      <Box
        w={{base:"200px",sm:'400px'}}
        h={{base:"200px",sm:'400px'}}
        bgColor="rgba(0, 0, 0, 0.7)"
        borderRadius="20px"
        ref={proyects}
      >
        <Flex justifyContent="center">
          <Text color="white" fontSize="30px" fontWeight="semibold">
            Dogs App
          </Text>
        </Flex>
        <Flex justifyContent="space-around" mt="25px">
        <Link
            href="https://pi-dogs-client-five.vercel.app/"
            color="white"
            fontSize={{base:"12px",sm:'20px'}}
            fontWeight="semibold"
          >
            🌐 go to site
          </Link>
          <Link
            href="https://github.com/ulisesgomez123/Pi-Dogs-Client"
            color="white"
            fontSize={{base:"12px",sm:'20px'}}
            fontWeight="semibold"
          >
            💼Repository
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
