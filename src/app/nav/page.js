"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState("navbar");

  useEffect(() => {
    // Function to handle window resize and set the state
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const mobileView = window.innerWidth <= 599;
        setIsMobile(mobileView);
        setToggle(mobileView ? "nomenu" : "navbar");
      }
    };

    // Call the function initially to set the correct state
    handleResize();

    // Set up event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menubtn = () => {
    setToggle((prevToggle) => (prevToggle === "navbar" ? "nomenu" : "navbar"));
  };

  return (
    <div className="header">
      <Link href="/">
        <div className="banner">
          <img
            src="https://cdn-icons-png.freepik.com/256/8206/8206995.png"
            height="45px"
            width="45px"
            alt="Logo"
          />
          <div className="logo"></div>
        </div>
      </Link>
      <div className={toggle}>
        <Link href="/home">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">Resume</Link>
        <Link href="/skills">Qualification</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="adminnav">
        <Link href="/admin">
          <div className="adminbtn">Admin</div>
        </Link>
      </div>
      {isMobile && (
        <div className="m" style={styles.menubtn}>
          <button onClick={menubtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  menubtn: {
    position: "sticky",
    right: "20px", // Adjust as needed
    marginLeft: "auto", // Ensure it sticks to the right
    marginTop: "35px",
  },
};
