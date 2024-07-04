import { Box, Img } from "@chakra-ui/react";
const LoginSignupImageSide = ({ loginSignupImg }) => {
  return (
    <>
      <Box bg={"#F8F8F8"} borderRadius={"12px"}>
        <Img height={"auto"} position={""} src={loginSignupImg} />
      </Box>
    </>
  );
};

export default LoginSignupImageSide;
