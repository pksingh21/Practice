import React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  CardContent,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  SendIcon,
  ListItemText,
  Collapse,
  Button,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
function Cardx(Props) {
  const [open, setOpen] = React.useState(true);
  const [dopeShope, setDopeShope] = React.useState(["1", "2", "3"]);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Card
        style={{
          maxWidth: 345,
          borderRadius: 8,
          width: "auto",
        }}
      >
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} variant="rounded"></Avatar>}
          titleTypographyProps={{
            color: "",
            fontWeight: "bold",
            fontSize: "15px",
          }}
          title={Props.AggarwalHeading}
          subheaderTypographyProps={{ fontSize: "13px" }}
          subheader={Props.GSTHeading}
          action={
            <div>
              <Typography
                inline
                style={{ color: "grey", display: "inline", fontSize: "14px" }}
              >
                Status :{" "}
              </Typography>{" "}
              <div
                style={{ display: "inline", color: "green", fontSize: "14px" }}
              >
                Paid
              </div>{" "}
            </div>
          }
        />
        <CardContent sx={{ paddingBottom: "2px" }}>
          <List
            sx={{ width: "auto", maxWidth: 345 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          />
          <ListItemButton onClick={handleClick}>
            {open ? (
              <ListItemText
                primary="Your Current Order"
                disableTypography
                style={{ fontSize: "13px", paddingBottom: "0px" }}
              />
            ) : (
              <ListItemText
                primary="Click To View Orders"
                disableTypography
                style={{ fontSize: "13px", paddingBottom: "0px" }}
              />
            )}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
              {dopeShope.map((elem) => {
                return (
                  <>
                    <ListItemButton>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText
                        primary={elem}
                        style={{ color: "", fontSize: "13px" }}
                        disableTypography
                      />
                    </ListItemButton>
                  </>
                );
              })}{" "}
            </List>
          </Collapse>
        </CardContent>
        <CardContent sx={{ backgroundColor: "" }}>
          <CardHeader
            action={
              <>
                <div
                  style={{
                    fontSize: "13px",
                    paddingTop: "4px",
                  }}
                >
                  {Props.Amount}
                </div>
              </>
            }
            title={
              <>
                <div
                  style={{
                    fontSize: "13px",
                  }}
                >
                  21 Dec 2021
                </div>
              </>
            }
          />
        </CardContent>
        <CardContent
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button
            variant="outlined"
            style={{
              border: "2px solid",
              borderRadius: 50,
              borderColor: "#54B175",
              width: "343px",
            }}
          >
            <Typography
              style={{
                fontSize: "14px",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "45px",
                paddingLeft: "45px",
                color: "#54B175",
              }}
            >
              {Props.ButtonText}
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
export default Cardx;
