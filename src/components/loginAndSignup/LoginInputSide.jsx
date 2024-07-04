import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Img,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import googleIcon from "../../assets/images/google.png";

import closeEye from "../../assets/icons/closeEye.png";
import openEye from "../../assets/icons/openEye.png";
const LoginInputSide = () => {
  const [passViewIcon, setPassViewIcon] = useState(false);
  const [passwordError, setPasswordError] = useState("email or password wrong");
  const handlePassViewIcon = () => {
    const password = document.getElementById("password");
    if (!passViewIcon) {
      setPassViewIcon(true);
      password.type = "text";
    } else {
      setPassViewIcon(false);
      password.type = "password";
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log({ email, password });
  };

  //
  const inputValueClass = document.getElementsByClassName("inputValueClass");
  const inputLabel = document.getElementsByClassName("inputLabel");

  // if(inputValueClass.value )
  console.log(inputValueClass);
  return (
    <>
      <Box padding={"30px"} minW={"406px"} w={"auto"} className="login">
        <Text
          fontWeight={"600"}
          fontFamily={'"Inter", sans-serif'}
          fontSize={"26px"}
          color={"#374144"}
        >
          Welcome back! 👋
        </Text>
        <Box>
          <form action="" onSubmit={handleLogin}>
            <Box mt={"15px"}>
              <FormLabel
                fontFamily={'"Inter", sans-serif'}
                fontSize={"14px"}
                fontWeight={"400"}
                // color={"#000"}
                color={"#374144"}
                className="inputLabel"
              >
                {" "}
                Work email*
              </FormLabel>
              <Input
                type="email"
                padding={"8px, 12px, 8px, 12px"}
                border={"1px solid #EEEEEE"}
                borderRadius={"8px"}
                bg={"#F8F8F8"}
                color={"#374144"}
                fontSize={"14px"}
                fontWeight={"400"}
                outline={"none"}
                _focusVisible={{
                  outline: "none",
                }}
                fontFamily={'"Inter", sans-serif'}
                placeholder="write here"
                name="email"
                required
                className="inputValueClass"
              />
            </Box>

            <Box mt={"15px"} position={"relative"}>
              <FormLabel
                fontFamily={'"Inter", sans-serif'}
                fontSize={"14px"}
                fontWeight={"400"}
                color={"#374144"}
                className="inputLabel"
              >
                {" "}
                Password*
              </FormLabel>
              <Input
                padding={"8px, 12px, 8px, 12px"}
                border={"1px solid #EEEEEE"}
                borderRadius={"8px"}
                bg={"#F8F8F8"}
                color={"#374144"}
                fontSize={"14px"}
                fontWeight={"400"}
                outline={"none"}
                _focusVisible={{
                  outline: "none",
                }}
                fontFamily={'"Inter", sans-serif'}
                type="password"
                name="password"
                placeholder="write here"
                required
                id="password"
                className="inputValueClass"
              />

              <Box
                onClick={handlePassViewIcon}
                position={"absolute"}
                right={"-7px"}
              >
                {passViewIcon ? (
                  <Img
                    src={closeEye}
                    cursor={"pointer"}
                    mt={"-30px"}
                    mr={"18px"}
                  />
                ) : (
                  <Img
                    src={openEye}
                    cursor={"pointer"}
                    mt={"-30px"}
                    mr={"18px"}
                  />
                )}
              </Box>
              {/* 
              <Text
                fontFamily={'"Inter", sens-serif'}
                fontWeight={"400"}
                fontSize={"14px"}
                color={"#00C767"}
                mt={"8px"}
              >
                {passwordError}
              </Text> */}
            </Box>

            <Text
              fontFamily={'"Inter", sens-serif'}
              fontWeight={"400"}
              fontSize={"14px"}
              textAlign={"right"}
              color={"#3A7DFF"}
              mt={"5px"}
              cursor={"pointer"}
              _hover={{ textDecor: "underline" }}
              // display={'inline-block'}
            >
              Forgot your password?
            </Text>

            <Button
              height={"40px"}
              borderRadius={"8px"}
              padding={""}
              bg={"#777CF6"}
              fontSize={"15px"}
              fontWeight={"500"}
              fontFamily={'"Inter", sens-serif'}
              color={"white"}
              _hover={{ bg: "#6166f7" }}
              _focus={{ bg: "#4e53f3" }}
              w={"full"}
              mt={"10px"}
              type="submit"
            >
              Log in
            </Button>

            <Box position="relative" padding="7">
              <Divider w={"full"} border={"1px solid #EBEBEB"} />
              <AbsoluteCenter
                bg="white"
                px="4"
                color={"#B1B1B1"}
                fontSize={"12px"}
                fontWeight={"400"}
                fontFamily={'"Inter", sens-serif'}
              >
                OR
              </AbsoluteCenter>
            </Box>

            <Button
              height={"36px"}
              borderRadius={"8px"}
              padding={""}
              bg={"#F8F8F8"}
              fontSize={"15px"}
              fontWeight={"500"}
              fontFamily={'"Inter", sens-serif'}
              color={"#374144"}
              _hover={{ bg: "#F8F8F8" }}
              w={"full"}
              // mt={"10px"}
            >
              <Img src={googleIcon} mr={"8px"} />
              Continue with google
            </Button>
          </form>
        </Box>

        <Flex alignItems={"center"} gap={"8px"} mt={"16px"}>
          <Text
            fontFamily={'"Inter", sens-serif'}
            fontWeight={"400"}
            fontSize={"14px"}
          >
            Don’t have an account?
          </Text>
          <Link
            color={"#3A7DFF"}
            fontFamily={'"Inter", sens-serif'}
            fontWeight={"500"}
            fontSize={"14px"}
          >
            Sign up
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default LoginInputSide;
