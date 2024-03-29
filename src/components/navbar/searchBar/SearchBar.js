import React from "react";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  FormLabel,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import Cookies from 'universal-cookie';

export function SearchBar(props) {
  // Pass the computed styles into the `__css` prop
  const cookies = new Cookies();
  const [identityNumber, setIdentityNumber] = React.useState('')
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props;
  const changeInfoResponse = props.onEvent;
  // Chakra Color Mode
  const searchIconColor = useColorModeValue("gray.100");
  const inputBg = useColorModeValue("navy.900");
  const inputText = useColorModeValue("black");
  const handleClickEvent = () => {
    axios.get("http://144.126.242.191:36000/get-info")
        .then((response) => {
          let data = response.data;
          data.identityNumber = identityNumber;
          data.fullName = 'Nguyen Van A';
          data.birthDate = '20/08/1999';
          cookies.set('infoResponse', data);
          changeInfoResponse(data);
        });
  }
  return (
    // <InputGroup w={{ base: "100%" }} {...rest}>
    //   <InputLeftElement
    //     children={
    //       // <IconButton
    //       //   borderRadius='inherit'
    //       //   background='inherit'
    //       //   _hover='none'
    //       //   _active={{
    //       //     transform: "none",
    //       //   }}
    //       //   _focus={{
    //       //     boxShadow: "none",
    //       //   }}
    //       //   icon={
    //       //     <SearchBar color='black' w='15px' h='15px' onClick={handleClickEvent} />
    //       //   }></IconButton>
    //       <Button borderRadius='inherit' direction='row' align='center' colorScheme='Blue' w='1115px' h='25px' onClick={handleClickEvent}>Search</Button>
    //     }
    //   />
    //   <Input
    //     variant='search'
    //     fontSize='sm'
    //     color={inputText}
    //     fontWeight='500'
    //     _placeholder={{ color: "gray.400", fontSize: "14px" }}
    //     borderRadius={borderRadius ? borderRadius : "30px"}
    //     placeholder={placeholder ? placeholder : "Enter your identity number..."}
    //     value={identityNumber}
    //     onChange={(e) => setIdentityNumber(e.target.value)}
    //   />
    // </InputGroup>
    <>
    <FormLabel fontWeight="bold" >Identity number</FormLabel>
      <InputGroup size="lg" mt={5}>
      <Input
      fontWeight="semibold"
      pr="100px" 
      width="90%" 
      h="50px" 
      variant="filled"
        placeholder="Enter your identity number..."
        type="text"
        fontSize="md"
      />
      <Button
        colorScheme='blue'
        onClick={handleClickEvent}
        width="10%">
        Search
      </Button>
    </InputGroup>
    </>
  );
}
