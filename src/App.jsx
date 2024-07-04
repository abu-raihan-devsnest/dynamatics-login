import { Box } from "@chakra-ui/react";
import "./App.css";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";

function App() {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Login />
      </Box>

      <Box display={"flex"} justifyContent={"center"}>
        <Signup />
      </Box>
    </>
  );
}

export default App;
