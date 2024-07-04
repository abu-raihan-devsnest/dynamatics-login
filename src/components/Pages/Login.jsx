import { Box } from "@chakra-ui/react";
import LoginSignupImageSide from "../loginAndSignup/LoginSignupImageSide";
import LoginInputSide from "../loginAndSignup/LoginInputSide";
import loginRightSideImg from "../../assets/images/loginRightImg.png";
const Login = () => {
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
        <LoginInputSide />
        <LoginSignupImageSide loginSignupImg={loginRightSideImg} />
      </Box>
    </>
  );
};

export default Login;
