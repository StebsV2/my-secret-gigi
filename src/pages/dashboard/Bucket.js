import React, { useState } from "react";
import Button from "../../components/Button";
import PopUp from "../../components/PopUp";
import Form from "./Form";
import { CardContentFormModel } from "./FormModel";
import { httpPostContent } from "../../api.http.js";
import { useSelector } from "react-redux";
import { useTheme, createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  bucket: {},
  bucketHead: {
    backgroundColor: "#ececec",
    padding: "4px 16px",
    borderRadius: 12,
    marginBottom: 8,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    overflow: "scroll",
    height: "100%",
  },
  formContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Bucket = ({ title, children, dashKey, loadDashboard }) => {
  const [show, setShow] = useState(false);
  const onClickHandler = (e) => {
    setShow(!show);
  };

  const selectDashboards = useSelector((state) => state.app.dashboards);
  console.log("selectDashboards", selectDashboards);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //da sistemare
    const { value } = e.target[CardContentFormModel.text];
    console.log("DFFFFF");
    console.log(value);
    if (value !== "") {
      console.log("Sono nell'if");
      const content = { text: value };
      const isSuccess = await sendContent(content);
      setShow(!isSuccess);
      loadDashboard();
    } else {
      console.log("Stringa content vuota.");
    }
  };
  const sendContent = async (data) => {
    try {
      await httpPostContent(dashKey, data);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.bucket}>
      <div className={classes.bucketHead}>
        <h3>{title}</h3>
      </div>
      <div className={classes.cardContainer}>{children}</div>
      <Button onClickHandler={onClickHandler}>Add Card</Button>
      {show && (
        <PopUp>
          <div className={classes.formContainer}>
            <Form onSubmit={onSubmitHandler} onClose={() => setShow(false)}>
              Add Card
            </Form>
          </div>
        </PopUp>
      )}
    </div>
  );
};
export default Bucket;
