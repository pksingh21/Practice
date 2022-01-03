import Card from "./Cardx";
import { Grid, Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import React from "react";
import useWindowDimensions from "./useWindowDimensions";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import BottomBar from "../BottomBar/index";
function Index() {
  const [data, setData] = React.useState([
    {
      Heading: "Aggarwal Enterprises",
      GSTNumber: "GSTIN : 984984",
      ButtonText: "View Detaild Summary",
      Amount: "$80.32",
    },
    {
      Heading: "Narula Minimart",
      GSTNumber: "GSTIN : 6786543878",
      ButtonText: "Download Bill",
      Amount: "$230",
    },
    {
      Heading: "Narula Minimart",
      GSTNumber: "GSTIN : 6786543878",
      ButtonText: "Download Bill",
      Amount: "$230",
    },
    {
      Heading: "Narula Minimart",
      GSTNumber: "GSTIN : 6786543878",
      ButtonText: "Download Bill",
      Amount: "$230",
    },
    {
      Heading: "Narula Minimart",
      GSTNumber: "GSTIN : 6786543878",
      ButtonText: "Download Bill",
      Amount: "$230",
    },
    {
      Heading: "Narula Minimart",
      GSTNumber: "GSTIN : 6786543878",
      ButtonText: "Download Bill",
      Amount: "$230",
    },
  ]);
  function RenderCards(data) {
    return (
      <Grid item xs={12} sm={4}>
        <Card
          AggarwalHeading={data.Heading}
          GSTHeading={data.GSTNumber}
          ButtonText={data.ButtonText}
          Amount={data.Amount}
          style={{
            width: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "blue",
          }}
        />
      </Grid>
    );
  }
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Past Orders
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NotificationsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      {width > 598 ? (
        <Grid
          container
          spacing={1}
          sx={{
            paddingTop: "15px",
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((data) => RenderCards(data))}
          {console.log(height, width)}
        </Grid>
      ) : (
        <Grid
          container
          spacing={1}
          sx={{
            paddingTop: "20px",
            display: "flex",

            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((data) => RenderCards(data))}
          {console.log(height, width)}
        </Grid>
      )}
      <BottomBar />
    </>
  );
}
export default Index;
