import React from 'react'
import { Nav } from '../nav/page';

const page = () => {
  return (
    <div >
        <div className="div"><Nav/></div>
        <div style={styles.skills}>
        <div className="glass" style={styles.skill}>
            <h2>Graphic Design</h2>
            <div className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum repudiandae voluptatibus incidunt consequuntur et excepturi quis reiciendis? Expedita fugiat facere, in quis rem vitae molestiae excepturi similique repudiandae totam.</div>
        </div>
        <img src="https://cdn.pixabay.com/photo/2024/01/23/20/45/child-8528228_1280.png" height="400px" width="300px" style={styles.image}/>
        </div>
        <div style={styles.skills}>
        <img src="https://cdn.pixabay.com/photo/2024/02/09/17/22/video-8563483_1280.png" height="740px" width="700px"/>
        <div className="glass" style={styles.skill}>
            <h2>Video Editing</h2>
            <div className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum repudiandae voluptatibus incidunt consequuntur et excepturi quis reiciendis? Expedita fugiat facere, in quis rem vitae molestiae excepturi similique repudiandae totam.</div>
        </div>
       
        </div>
    </div>
     
  )
}

export default page;

const styles = {
    skills:{
        //  overflow:"hidden",
         display:"flex",
         flexWrap:"wrap"
        
    },
    skill:{
        color:'orange',
        flex:1,
        margin:"50px",
        padding:"15px"
    }
    ,
    image:{
        margin:"50px",
        display:"flex",
        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)) drop-shadow(0 6px 20px rgba(0, 0, 0, 0.19))',
    }
}