import './App.css';
import { Heading, Button } from '@chakra-ui/react'

function ChakraExample() {
  let x = 5;

  return (
    <div>
      <Heading>{x}</Heading>
      <Button size="lg" colorScheme="teal" vairant="solid">Click me!</Button>
    </div>
  );
}

export default ChakraExample;
