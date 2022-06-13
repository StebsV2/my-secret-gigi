import React from "react";
import { createUseStyles } from "react-jss";
import ManuelBlurrato from "../../ManuelBlurrato.jpg";

const useStyles = createUseStyles(() => ({
  avatarContainer: {
    display: "flex",
    gap: 4,
    alignItems: "center",
    padding: 4,
    borderRadius: 4,
    cursor: "pointer",
  },
  avatar: {
    width: 30,
    borderRadius: "100%",
    height: 30,
    border: "1px solid grey",
  },

  addAvatar: {
    display: "inline-block",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    width: 30,
    borderRadius: "100%",
    height: 30,
    margin: 0,
    marginBlock: 0,
    padding: 0,
    fontSize: 19,

    transform: "translateX(-20px)",

    //'&:hover': {
    //transform: 'translateX(-20px)',
    // animation: 'addAvatar',
    // animationDuration: '3s',
    // animationTimingFunction: 'ease',
    //}
  },
}));
export default function Avatar() {
  const classes = useStyles();
  return (
    <span className={classes.avatarContainer}>
      <img src={ManuelBlurrato} className={classes.avatar} />
      <div
        className={classes.addAvatar}
        onClick={() => console.log("Add your avatar here")}
      >
        +
      </div>
    </span>
  );
}
