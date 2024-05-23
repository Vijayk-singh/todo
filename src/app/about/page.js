import React from "react";
import { Nav } from "../nav/page";




 const About= () => {
  const name = "Shalini";
  const profession = "Graphics Design and Video Editing";
  const experience = "2 years of experience";
  const email = "shalinikumariokhla@gmail.com";

  return (
    <div style={styles.about} className="">
      <Nav/>
    <div style={styles.container} >
      <h1 style={styles.heading}>About {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat maxime aperiam dolor modi et! Voluptatibus architecto fuga, hic mollitia deleniti ab aliquam quae nostrum sed sunt! Repudiandae, necessitatibus ipsa?</p>
      <p style={styles.content}><strong>Profession:</strong> {profession}</p>
      <p style={styles.content}><strong>Experience:</strong> {experience}</p>
      <p style={styles.content}><strong>Email:</strong> <a href={`mailto:${email}`} style={styles.email}>{email}</a></p>
    </div>
    </div>
  );
};
export default About;
const styles = {
  container: {
    color:"orange",
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    // lineHeight: '1.6',
    // backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center',
    fontSize:"20px"
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
    fontSize:"50px",
    fontWeight:"bolder"
    
  },
  content: {
    color: 'blue',
    marginBottom: '20px',
    marginTop: '30px',
    fontSize:"30px",
    fontWeight:"bolder",
    fontFamily:"cursive"
  },
  email: {
    color: '#1a73e8',
    textDecoration: 'none',
    fontSize:"25px"
  },
  about:{
    // backgroundImage: 'url("https://cdn.pixabay.com/photo/2021/09/20/09/43/office-6640371_1280.jpg")',
    backgroundSize: 'cover',
    height:"100%",
    overflow:"hidden"
  }
};



// const About = () => {
//   return (
//     <div>
//       <div className="">
//         <Nav />
//       </div>
//       <div className="bg-dark p-5 Skills"> 
//       <div className="Skill">
//         <div className="skillheader accordian">Graphic Design</div>
//         <div className="skillcontent accordian-content"></div>
//       </div>
//       <div className="Skill">
//         <div className="skillheader">Video Editing</div>
//         <div className="skillcontent"></div>
//       </div>
//       <div className="Skill">
//         <div className="skillheader">Design creation</div>
//         <div className="skillcontent"></div>
//       </div>
//       <div className="Skill">
//         <div className="skillheader">Social media post making</div>
//         <div className="skillcontent"></div>
//       </div>
//       </div>
//       About
//     </div>
//   );
// };

// export default About;
