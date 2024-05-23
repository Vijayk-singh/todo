"use client"; 
import { Tienne } from 'next/font/google';
import React, { useState } from 'react';
import axios from "axios";
export default function Admin() {

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState(""); // Correct usage of useState
 console.log(type)
 const clear = (e) => {

  setTitle("");
  setUrl("");
  setType("");
  setDescription("");
};

 const onADD = async () => {
    try {
        // setLoading(true);
        const response = await axios.post("/api/addtodo", {url:url,title:title,type:type,desc:description});
        console.log("Add success", response);
        clear()
        alert('add success')
       
        // toast.success("Login success");
        // router.push("/profile");
    } catch (error) {
        console.log("Add failed", error.message);
        // toast.error(error.message);
    } 
    // finally{
    // setLoading(false);
    // }
}
  return (
    <div className='admin'>
       <h2>Add Your Project </h2>
      <div className="dataform">
       
        <div className="datainput">
          <label>Title</label>
          <input type='text' value={title} onChange={e=>setTitle(e.target.value)}></input>
          <label>URL</label>
          <input type='text' value={url} onChange={e=>setUrl(e.target.value)}></input>
          <label>Type</label>
          <select value={type} onChange={e=>setType(e.target.value)}>
            <option value="img">img</option>
            <option value="gif">gif</option>
            <option value="vedio">vedio</option>
            <option value="other">other</option>
          </select>
          <label>Description</label>
          <textarea onChange={e=>setDescription(e.target.value)} value={description}></textarea> {/* Corrected the input type to 'textarea' */}
          <button onClick={clear}>CLEAR</button>
          <button onClick={onADD}>ADD</button>
         
        </div>
      </div>
    </div>
  );
}
