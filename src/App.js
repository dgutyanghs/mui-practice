// import { Button, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";
import  Navbar  from './components/Navbar'

function App() {
  return (
    <Box>
      <Navbar />
      <Stack  justifyContent={'space-between'} direction={"row"} spacing={2}>

        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
