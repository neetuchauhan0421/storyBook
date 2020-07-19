import React from "react";

import { Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";


import bgImage from "../src/resources/images/bg-SignIn.png";

const styles = theme => ({
  grid1: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    minHeight: "100vh",
    background: `url(${bgImage}) no-repeat fixed`,
    backgroundSize: "100% 100%"
  },
  sideDiv: {
    margin: "7% 10%"
  },
  logo: {
    width: "70%"
  },
  textSide: {
    color: "white",
    marginTop: "10%"
  },
  poweredBy: {
    color: "white",
    marginTop: "23%"
  },
  Button: {
    color: "white",
    border: "1px solid white",
    marginTop: "1.5rem",
    "&:hover": {
      border: "1px solid white",
      color: "black",
      background: "white"
    }
  },
  cordaLogo: {
    width: "55%",
    marginLeft: "-1.5rem",
    marginTop: "-1.5rem"
  }
});

const AsideLogin = props => {
  const { classes } = props;
  return (
    <Grid item md={4} className={classes.grid1}>
      <div className={classes.sideDiv}>
        <Typography variant="h5" className={classes.textSide}>
          {/* Customise, create and integrate smart contracts to save money &amp;
          increase your productivity. */}
      Risk Centered
        </Typography>
        <Typography variant="subtitle1" className={classes.textSide}>
          {/* An easy and simple way to create contracts. Big, small, simple,
          complex or smart and of course you can use IoT devices to create
          logical contracts. */}
         Vulneribility Management
        </Typography>
        <Button variant="outlined" color="primary" className={classes.Button}>
          Request for a demo
        </Button>
        <Typography
          variant="subtitle1"
          className={classes.poweredBy}
          gutterBottom
        >
         Security Workflow
        </Typography>
        {/* <Typography
          variant="h6"
          style={{
            color: "#ffffff"
          }}>
          Corda
        </Typography> */}
      </div>
    </Grid>
  );
};


export default withStyles(styles)(AsideLogin);