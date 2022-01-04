import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import {
  Grid,
  Button,
  Toolbar,
  Box,
  Avatar,
  AppBar,
  Typography,
  IconButton,
  styled,
  Badge,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import SaveIcon from "@mui/icons-material/Save";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
export default function InputAdornments() {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 66,
    height: 66,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "14px",
        paddingLeft: "5vw",
        paddingRight: "6vw",
      }}
    >
      <Grid
        item
        xs={12}
        sm={9}
        style={{
          backgroundColor: "",
          paddingBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={
            <SmallAvatar
              alt="hue"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
          }
        >
          {" "}
          <Avatar
            alt="huehue"
            sx={{
              paddingRight: "0px",
              paddingLeft: "",
              zIndex: "0",
              height: 233,
              width: 233,
              maxHeight: { xs: 200, md: 267 },
              maxWidth: { xs: 200, md: 650 },
              zIndex: "0",
              position: "relative",
            }}
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />{" "}
        </Badge>
      </Grid>

      <Grid item xs={12} sm={9} style={{ backgroundColor: "" }}>
        <TextField
          label="Full name"
          id="outlined-start-adornment"
          style={{ width: "100%", paddingTop: "0px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        style={{ backgroundColor: "", paddingTop: "14px" }}
      >
        <TextField
          label="Email"
          id="outlined-start-adornment"
          style={{ width: "100%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        style={{ backgroundColor: "", paddingTop: "14px" }}
      >
        <TextField
          label="Phone Number"
          id="outlined-start-adornment"
          style={{ width: "100%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroidIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          paddingTop: "254px",
          paddingBottom: "50px",
        }}
      >
        <Button
          variant="outlined"
          endIcon={<SaveIcon style={{ color: "white" }} />}
          style={{
            width: "70%",

            borderColor: " #27AE60",
            backgroundColor: "#27AE60",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              width: "450px",
              color: "white",
            }}
          >
            Save
          </div>{" "}
        </Button>
      </Grid>
    </Grid>
  );
}
