import { Box } from "@chakra-ui/react";
import LoginSignupImageSide from "../loginAndSignup/LoginSignupImageSide";
import SignUpInputSide from "../loginAndSignup/SignupInputSide";
import signUpRightImg from "../../assets/images/signupRightImg.png";
const Signup = () => {
  return (
    <>
      <Box
        bg={"white"}
        padding={"20px"}
        borderRadius={"24px"}
        boxShadow={"lg"}
        margin={"20px"}
        width={"auto"}
        maxW={"835px"}
        display={{ base: "block", lg: "flex" }}
        borderTop={"1px solid lightgray"}
      >
        <SignUpInputSide />
        <LoginSignupImageSide loginSignupImg={signUpRightImg} />
      </Box>
    </>
  );
};

export default Signup;
