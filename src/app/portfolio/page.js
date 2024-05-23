"use client";
import React, { useEffect } from "react";
import { Nav } from "../nav/page";
// import './Portfolio.css'
import axios from "axios";

const Portfolio = () => {
  const [loading, setLoading] = React.useState([]);
  const [proj, setProj] = React.useState([{}]);

  const projects = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/view", {
        "Content-Type": "application/json",
      });
      setProj(response);
    } catch (error) {
      console.log("fetch failed", error.message);
      // toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    projects();
  }, []);

  console.log(proj);
  return (
    <div key="21" >
      <div className="portfolio" key="2">
        <Nav />
      </div>
      <div className="portfolioheader">Portfolio</div>
      <div className="container">
   
        {proj.status
          ? proj.data.map((element) => (
              <div className="projbox" key={element}>
                <div className="title">{element.title}</div>
                <img className="image" src={element.url}/>
                <div className="description" key={element.id}>{element.desc}</div>
              </div>
            ))
          : "Loading..."}
      
      </div>
    </div>
  );
};

export default Portfolio;
