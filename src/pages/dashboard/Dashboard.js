import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, createUseStyles } from "react-jss";
import Bucket from "./Bucket";
import Card from "./Card";
import { fetchDashboards } from "../../store/appSlice";
import myImg from "../../ManuelBlurrato.jpg";

const useStyles = createUseStyles((theme) => ({
  dashboard: {
    display: "flex",
    overflow: "scroll",
    gap: 16,
    width: "100vw",
    height: "100vh",
    //backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    padding: 14,
  },
}));

const Dashboard = () => {
  const myDashboards = useSelector((state) => state.app.dashboards);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    await dispatch(fetchDashboards());
    setIsLoading(false);
  };

  const theme = useTheme();
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  console.log();
  return (
    <>
      <div className={classes.dashboard}>
        {!isLoading ? (
          myDashboards.length > 0 ? (
            myDashboards.map(({ name, id, contents = [] }) => {
              return (
                <Bucket
                  title={name}
                  key={id}
                  dashKey={id}
                  loadDashboard={loadDashboard}
                >
                  {contents.map(({ text, id }) => (
                    <Card
                      descr={text}
                      title={"title"}
                      key={id}
                      img={myImg}
                      actions={{ comments: 764, likes: 11111, attachments: 5 }}
                    />
                  ))}
                </Bucket>
              );
            })
          ) : error ? (
            <span>**Boom**</span>
          ) : (
            <span>Non ci sono Dashboard</span>
          )
        ) : (
          <span>Caricamento</span>
        )}
      </div>
    </>
  );
};

export default Dashboard;
