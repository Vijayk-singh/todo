
"use client"
import React from "react";
import Link from "next/link";
import { Nav } from "../nav/page";
const Admin = () => {
  return (
    <div>
        <Nav/>
        <div className="" style={styles.box}></div>
        <div className="addproject" style={styles.addproj}><Link href="/admin/addproj">Add Your Projects</Link></div>
        <div className="addproject" style={styles.delproj}><Link href="/admin/deleteproj">Delete Your Projects</Link></div>
    </div>
  )
}

export default Admin;

const styles ={
    box:{
      padding:"5%",
      display:"flex",
      flexWrap:"wrap",
      textAlign:"center"
    },
    addproj:{
        margin:"1% 40%",
        padding:"2%",
        border:"1px solid orange"
        

    },
    delproj:{
        margin:"1% 40%",
        padding:"2%",
        border:"1px solid orange"

    }
}