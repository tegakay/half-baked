import React, { useState, useEffect } from "react";
import Notelist from "./Notelist";

function Main() {
  const [news, setNews] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetchreq();
  }, []);

  const fetchreq = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setNews(data.data.memes))
      .then((data) => {
        return setLoading(false);
      });
  };

  //check if data is in the api
  if (Loading) {
    return <div className="App">Loading...</div>;
  }

  console.log("checking", news);
  return (
    <div>
      <Notelist news={news} />
    </div>
  );
}

export default Main;
