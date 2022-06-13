import { useState } from "react";
import { useTheme, createUseStyles } from "react-jss";
import CardActions from "../../components/CardActions";
import { CardLabel } from "../../components/CardLabel";

const useStyles = createUseStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ececec",
    color: "black",
    padding: 14,

    width: 400,
    borderRadius: 8,
    border: "4px transparent black",
  },
  cardDescr: {
    marginBottom: 8,
    fontSize: 14,
    color: "#424141",
  },
  imgCard: { marginBottom: 8, borderRadius: 8, maxHeight: 200, maxWidth: 400 },
}));

function Card({ descr, title, actions, img, ...rest }) {
  const classes = useStyles();
  //procedimento con props hardcoded

  return (
    <div {...rest} className={classes.card}>
      <CardLabel
        labels={[
          { priority: "red", category: "Frontend" },
          { priority: "orange", category: "Backend" },
          { priority: "blue", category: "Backend" },
        ]}
      />
      <h4>{title}</h4>
      {img && (
        <img className={classes.imgCard} src={img} alt="Manuel Blurrato" />
      )}
      <div className={classes.cardDescr}>{descr}</div>
      <CardActions actions={actions} />
    </div>
  );
}
export default Card;
