"use client";
import React, { useEffect } from "react";


import axios from "axios";
const DeleteProj = () => {
  const [loading, setLoading] = React.useState([]);
  const [proj, setProj] = React.useState([{}]);
  
  const del = async (id) => {
    try {
        const response = await axios.delete('/api/deletetodo/', { data: { id } });
        console.log(response.data); // Assuming the response contains data
        alert("deleted")
    } catch (error) {
        console.error("Delete failed:", error.message);
    }
}

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
    <div>
      <div className="">

      </div>
      <div className="container text-center">Your Projects</div>
      
      <div className="proj">
        {proj.status
          ? proj.data.map((element) => (
              <div className="projects">
                <div>{element.title}</div>
                <div key={element.id} alt={element.title}><img src={element.url} alt={element.url}></img></div>
                <div key={element.id}>{element.type}</div>
                <div key={element.id}><button onClick={() => del(element._id)}>Delete</button></div>

              </div>
              
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default DeleteProj;
