// import { Button, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { CssBaseline } from '@mui/material';
import  Add  from "./components/Add";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box bgcolor={'Background.default'} color={"text.primary"}>
        <Navbar />
        <Stack justifyContent={"space-between"} direction={"row"} spacing={2}>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
      <Add />
    </ThemeProvider>
  );
}

export default App;
