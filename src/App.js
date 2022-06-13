import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider, createUseStyles } from "react-jss";
import { themeList } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "./store/appSlice";
import {
  fetchDashboards,
  setErrorAction,
  setErrorMessageAction,
} from "./store/actions/errorActions";

const useStyles = createUseStyles(() => ({
  errorBanner: {
    backgroundColor: "#fc9d9dd9",
    color: "#fd0000",
    minWidth: 300,
    position: "fixed",
    top: 25,
    left: "50vw",
    transform: "translateX(-50%)",
    padding: 8,
    borderRadius: 8,
    textAlign: "center",
    border: "1px solid #fd0000",
  },
}));

function App() {
  const themeMode = useSelector((state) => state.app.themeMode);
  const dispatch = useDispatch();
  const classes = useStyles();
  const themeRef = useRef();

  const isError = useSelector((state) => state.error.errorDisplay);
  const errorMessage = useSelector((state) => state.error.errorMessage);

  const themeCreator = () => {
    switch (themeMode) {
      case "darkTheme":
        return themeList.darkTheme;

      case "psychedelicTheme":
        return themeList.psychedelicTheme;

      default:
        return themeList.lightTheme;
    }
  };

  return (
    <div>
      {isError && (
        <div  style={{display: 'none'}} className={classes.errorBanner} role="alert">
          {errorMessage}
        </div>
      )}
      <div style={{ display: "none", justifyContent: "center" }}>
        <button
          style={{}}
          onClick={() => {
            dispatch(setThemeMode(themeRef.current.value));
          }}
        >
          MoonKnight
        </button>
        <button
          style={{}}
          onClick={() => {
            dispatch(setErrorAction(!isError));
            //dispatch(fetchDashboards("dashboards/fetchDashboards"));
          }}
        >
          mostra Errore
        </button>
        <button
          style={{}}
          onClick={() => {
            dispatch(setErrorMessageAction("Ciao sono un piccolo errore"));
          }}
        >
          set Errore
        </button>
        <label htmlFor="theme">SELECT YOUR FIGHTER</label>
        <select ref={themeRef} name="theme" id="theme">
          <option value="psychedelicTheme">Psycho</option>
          <option value="darkTheme">Dark</option>
          <option value="lightTheme">Light</option>
        </select>
      </div>
      <ThemeProvider theme={themeList[themeMode]}>
        <Router basename="/">
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

const AppRoutes = () => {
  const myRoutes = useRoutes(routes);
  return myRoutes;
};

export default App;
