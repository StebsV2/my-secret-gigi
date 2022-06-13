import { createUseStyles } from "react-jss";

function Button({ type, onClickHandler, children }) {
  //const { type, onClickHandler, children } = props;
  //const {  children } = rest;

  const useStyles = createUseStyles(() => ({
    btn: {
      borderRadius: 8,
      backgroundColor: "white",
      fontSize: 24,
      color: 'rgba(0,0,0,.8)'
    },
  }));

  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
      <button className={classes.btn} type={type} onClick={onClickHandler}>
        {children}
      </button>
    </div>
  );
}
export default Button;
