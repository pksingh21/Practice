import React from "react";
import Form from "./Form";
import {
  Grid,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircle from "@mui/icons-material/AccountCircle";
function ProfilePage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: "black" }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              Edit Profile
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>{" "}
      <Form />
    </>
  );
}
export default ProfilePage;
