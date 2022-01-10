import * as React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import { ReactComponent as LoginConfusion } from "../Resources/LoginConfusin.svg";
import { Grid, Button } from "@mui/material";
export default function InputAdornments() {
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
        <LoginConfusion />
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        style={{
          backgroundColor: "",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "",
        }}
      >
        {" "}
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "",
            width: "70%",
          }}
        >
          There was an error generating OTP. <br />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        style={{
          backgroundColor: "",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "",
        }}
      >
        {" "}
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "",
            width: "70%",
          }}
        >
          Please Try Again Later
        </div>
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
          paddingLeft: "2px",
        }}
      >
        <Button
          variant="outlined"
          endIcon={
            <ReplayIcon style={{ color: "white", paddingRight: "3%" }} />
          }
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
              display: "fex",
              width: "95%",
              color: "white",
            }}
          >
            Retry Login
          </div>{" "}
        </Button>
      </Grid>
    </Grid>
  );
}
