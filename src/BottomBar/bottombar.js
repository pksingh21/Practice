import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

function BottomBar() {
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "grey",
          bottom: 0,
          top: "auto",
          alignItems: "center",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Toolbar>
          <Box style={{}}>
            <IconButton
              color="inherit"
              aria-label=""
              style={{ paddingRight: "15vw" }}
            >
              <QrCodeIcon />
            </IconButton>
          </Box>
          <IconButton
            color="inherit"
            aria-label=""
            style={{ paddingRight: "15vw" }}
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label=""
            style={{ paddingRight: "15vw" }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label=""
            style={{ display: "flex", alignItems: "space-between" }}
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default BottomBar;
