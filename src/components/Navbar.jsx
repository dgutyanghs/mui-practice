import { AppBar, styled, Toolbar, Typography , Box, InputBase, Badge, Divider} from "@mui/material";
import React from "react";
import PetsIcon from '@mui/icons-material/Pets';
// import MailIcon from '@mui/icons-material/Mail';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { theme } from "../theme";

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled("div")(({theme}) => ({
  background: 'white',
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({theme}) => ({
  // backgroundColor: 'white'
  display: 'flex',
  justifyContent: 'space-between',
  

}))

const Navbar = () => {
  return (
    <AppBar position="stiky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs: 'none', sm: 'block'}}}>Lama Dev</Typography>
        <PetsIcon sx={{display:{xs: 'block', sm: 'none'}}} />
        <Search> 
          <InputBase placeholder="search"/>
         </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon ></MailIcon>
          </Badge>
          <Divider sx={{marginLeft: '10px', marginRight: '6px'}} orientation="vertical" variant="middle" flexItem/>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>

        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
