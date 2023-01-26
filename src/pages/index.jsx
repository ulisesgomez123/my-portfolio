import React, { useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import {Box} from '@chakra-ui/react'


export default function Home() {
  const app = useRef();
  const circle = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".box", { rotation: 180 });
      gsap.to(".box1", { rotation: 360 });
      // or refs
      gsap.to(circle.current, { rotation: 180});
      
    }, app);
    
    return () => ctx.revert();
  }, []);

  return (
    <Box
      display="flex"
      alignItems=" center"
      justifyContent="space-around"
      minHeight="100vh"
      ref={app}
      className="App"
    >
      <Box
        width="100px"
        height="100px"
        borderRadius=" 12px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        backgroundColor="green"
        fontWeight="600"
        color="light"
        className="box1"
      >
        selector 1
      </Box>

      <Box
        width="100px"
        height="100px"
        borderRadius=" 12px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        backgroundColor="green"
        fontWeight="600"
        color="light"
        className="box"
      >
        selector
      </Box>
      <Box
        className="circle"
        width="100px"
        height="100px"
        borderRadius="99%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        backgroundColor="purple"
        fontWeight="600"
        color="light"
        ref={circle}
      >
        Ref
      </Box>
    </Box>
  );
}
