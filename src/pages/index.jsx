import React, { useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import {Box} from '@chakra-ui/react'

export default function Home() {
  const boxRef = useRef();
  useLayoutEffect(() => {
    // Refs allow you to access DOM nodes
    // then we can animate them like so...
    gsap.to(boxRef.current ,{
      rotation: "+=180"
    });
  });
  return (
    <div>
      <Box color='red' ref={boxRef}>Hello World</Box>
    </div>
  );
}
