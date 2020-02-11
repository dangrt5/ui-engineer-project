import React, { useState, useEffect } from "react";
import HalfCircle from "../HalfCircle/HalfCircle";
import { get } from "../../utils/request";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await get({
          url: "/retrieve-data"
        });
        setData(data.response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  console.log({ data });

  return (
    <div className="container">
      <HalfCircle />
    </div>
  );
};

export default App;
