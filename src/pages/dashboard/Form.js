import Button from "../../components/Button";
import InputText from "../../components/InputText";
import "./css/Form.css";
import { useState } from "react";
import { CardContentFormModel } from "./FormModel";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  form: {
    width: 500,
    height: 400,
    backgroundColor: "#d9d9d9",

    gap: 24,
    borderRadius: "8px",
    display: "grid",
    textAlign: "center",
  },
  floatingLabelsRight: {
    float: "right",
    marginBottom: 20,
  },
  floatingLabelsLeft: {
    float: "left",
    marginBottom: 20,
  },
}));

function CreateCardContentForm({ onSubmit, children, onClose }) {
  const [cardContent, setCardContent] = useState({
    [CardContentFormModel.text]: "",
  });
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setCardContent({ ...cardContent, [name]: value });
  };

  /*const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { text } = cardContent;
      const { data } = await httpCreateCard(text);
      return data;
    } catch (err) {
      console.log(err);
    }
  };*/
  const classes = useStyles();
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div
        className="title"
        style={{
          textAlign: "center",
        }}
      >
        <label style={{ fontSize: 24, fontWeight: "bold" }}>{children}</label>
      </div>
      <div style={{ padding: 24 }}>
        <label className={classes.floatingLabelsLeft}>
          Titolo<br></br>
          <InputText
            name={CardContentFormModel.text}
            id={CardContentFormModel.text}
            value={cardContent[CardContentFormModel.text]}
            onChange={onChangeHandler}
          ></InputText>
        </label>
        <br></br>
        <label className={classes.floatingLabelsRight}>
          Descrizione<br></br>
          <InputText></InputText>
        </label>
        <br></br>
        <label className={classes.floatingLabelsLeft}>
          Assegna A <br></br>
          <InputText></InputText>
        </label>
        <br></br>
        <label className={classes.floatingLabelsRight}>
          Scadenza<br></br>
          <InputText></InputText>
        </label>
        <br></br>
        <label className={classes.floatingLabelsLeft}>
          Categoria<br></br>
          <InputText></InputText>
        </label>
        <br></br>
        <label className={classes.floatingLabelsRight}>
          Copertina<br></br>
          <input type={"file"}></input>
        </label>
      </div>
      <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
        <Button type={"button"} onClickHandler={onClose}>
          Close
        </Button>
        <Button onSubmit={onSubmit} type={"submit"}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default CreateCardContentForm;
