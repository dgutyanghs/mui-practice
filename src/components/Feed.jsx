// import { Box } from '@mui/material'
// import React from 'react'

// const Feed = () => {
//   return (
//     <Box bgcolor={'pink'} flex={4}i p={2}>Feed</Box>
//   )
// }

// export default Feed

import * as React from "react";
import { Box } from "@mui/material";
import Post from "./Post";


const Feed = () => {

  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      
    </Box>
  );
};

export default Feed;
