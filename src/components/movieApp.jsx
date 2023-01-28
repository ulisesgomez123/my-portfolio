import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Box, Text, Img, Button, Flex, Link } from "@chakra-ui/react";



export default function MovieApp() {
  const [state, setState] = useState({
    hover: false,
    mount: true,
    description:false,
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
        gsap.to(proyects.current, { x: -800 });
      }
    }, proyects);

    return () => ctx.revert();
  }, [state]);
  return (
    <Box
      w="400px"
      h="400px"
      onMouseEnter={() => setState({ hover: true, mount: false })}
      onMouseLeave={() => setState({ hover: false, mount: false })}
      m="3%"
    >
  
      <Img
        w="400px"
        h="400px"
        position="absolute"
        zIndex={-1}
        borderRadius="20px"
        border="solid black 2px"
        src="https://firebasestorage.googleapis.com/v0/b/rentalibre-fbbda.appspot.com/o/userPicture%2Fd16c7537-8cd4-4070-81c1-16219c1a8feb.png?alt=media&token=f85b8088-618d-4c8e-b75e-80d12f5ec527"
      />
      <Box
        w="400px"
        h="400px"
        bgColor="rgba(0, 0, 0, 0.7)"
        borderRadius="20px"
        ref={proyects}
      >
        <Flex justifyContent="center">
          <Text color="white" fontSize="30px" fontWeight="semibold">
            Movie App
          </Text>
        </Flex>
        <Flex justifyContent="space-around" mt="25px">
          <Link
            href="https://movie-app-two-inky.vercel.app/"
            color="white"
            fontSize="20px"
            fontWeight="semibold"
          >
            🌐 go to site
          </Link>
          <Link
            href="https://github.com/ulisesgomez123/Movie-app"
            color="white"
            fontSize="20px"
            fontWeight="semibold"
          >
            💼Repository
          </Link>
        </Flex>
        
      </Box>
    </Box>
  );
}
