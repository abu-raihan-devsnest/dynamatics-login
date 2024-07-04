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
import googleIcon from "../../assets/images/google.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import "./loginSignup.css";

import closeEye from "../../assets/icons/closeEye.png";
import openEye from "../../assets/icons/openEye.png";

const SignUpInputSide = () => {
  const [passViewIcon, setPassViewIcon] = useState(false);
  // const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordError, setPasswordError] = useState("At least 8 characters");
  // handle show,hide password
  const handlePassViewIcon = () => {
    const password = document.getElementById("signUPpassword");
    if (!passViewIcon) {
      setPassViewIcon(true);
      password.type = "text";
    } else {
      setPassViewIcon(false);
      password.type = "password";
    }
  };

  // handle create account
  const handleCreateAccount = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log({ email, password, name });
  };

  const handleInputLabelColorFunction = () => {};

  return (
    <>
      <Box padding={"30px"} minW={"406px"} w={"auto"} className="signup">
        <Text
          className="panda"
          fontWeight={"600"}
          fontFamily={'"Inter", sans-serif'}
          fontSize={"26px"}
          color={"#374144"}
        >
          Create your Account!
        </Text>
        <Box>
          <form action="" onSubmit={handleCreateAccount}>
            <Box mt={"15px"}>
              <FormLabel
                fontFamily={'"Inter", sans-serif'}
                fontSize={"14px"}
                fontWeight={"400"}
                color={"#374144"}
              >
                {" "}
                Full name*
              </FormLabel>
              <Input
                type="text"
                padding={"8px, 12px, 8px, 12px"}
                border={"1px solid #EEEEEE"}
                borderRadius={"8px"}
                bg={"#F8F8F8"}
                color={"#374144"}
                fontSize={"13px"}
                fontWeight={"400"}
                outline={"none"}
                _focusVisible={{
                  outline: "none",
                }}
                fontFamily={'"Inter", sans-serif'}
                placeholder={"write here"}
                name="name"
                required
              />
            </Box>

            <Box mt={"15px"}>
              <FormLabel
                fontFamily={'"Inter", sans-serif'}
                fontSize={"14px"}
                fontWeight={"400"}
                color={"#374144"}
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
                fontSize={"13px"}
                fontWeight={"400"}
                outline={"none"}
                _focusVisible={{
                  outline: "none",
                }}
                fontFamily={'"Inter", sans-serif'}
                placeholder="write here"
                name="email"
                required
              />
            </Box>

            <Box mt={"15px"} position={"relative"}>
              <FormLabel
                fontFamily={'"Inter", sans-serif'}
                fontSize={"14px"}
                fontWeight={"400"}
                color={"#374144"}
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
                fontSize={"13px"}
                fontWeight={"400"}
                outline={"none"}
                _focusVisible={{
                  outline: "none",
                }}
                fontFamily={'"Inter", sans-serif'}
                type="password"
                name="password"
                required
                id="signUPpassword"
                placeholder="write here"
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

              <Text
                fontFamily={'"Inter", sens-serif'}
                fontWeight={"400"}
                fontSize={"14px"}
                color={"#00C767"}
                mt={"8px"}
              >
                {passwordError}
              </Text>
            </Box>

            <Box mt={"15px"} position={"relative"}>
              <FormLabel
                fontFamily={'"Inter", sans-serif'}
                fontSize={"13px"}
                fontWeight={"600"}
                color={"#374144"}
              >
                {" "}
                Phone number
              </FormLabel>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: "100%",
                  padding: "8px 12px",
                  paddingLeft: "45px",
                  border: "1px solid #EEEEEE",
                  borderRadius: "8px",
                  backgroundColor: "#F8F8F8",
                  color: "#374144",
                  fontSize: "13px",
                  fontWeight: "400",
                  outline: "none",
                  fontFamily: "Inter, sans-serif",
                }}
                containerStyle={{ width: "100%" }}
                required
                inputClass="custom-phone-input"
                placeholder="Type number"
                buttonStyle={{
                  border: "1px solid #EEEEEE",
                  borderRadius: "8px 0 0 8px",
                  borderRightColor: "#EEEEEE",
                  backgroundColor: "#F8F8F8",
                }}
              />
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
              Sign up
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
            Already have an account?
          </Text>
          <Link
            color={"#3A7DFF"}
            fontFamily={'"Inter", sens-serif'}
            fontWeight={"500"}
            fontSize={"14px"}
          >
            Log in
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default SignUpInputSide;
