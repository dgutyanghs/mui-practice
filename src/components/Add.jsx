import { Fab, Modal, Tooltip, Box, Typography, Stack, Button, ButtonGroup, styled, TextField,Avatar } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const SytledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10

})

const Add = () => {
      const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip  title="Add" sx={{ position: 'fixed', bottom: 20, left:{xs:"calc(50% - 25px)", md:30}}}
      onClick={e => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3} >
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;

// import {
//     Fab,
//     Tooltip,
//   } from "@mui/material";
//   import {
//     Add as AddIcon,
//   } from "@mui/icons-material";
  

  
//   const Add = () => {
//     return (
//       <>
//         <Tooltip
//           title="Delete"
//         >
//           <Fab color="primary" aria-label="add">
//             <AddIcon />
//           </Fab>
//         </Tooltip>
//       </>
//     );
//   };
  
//   export default Add;
