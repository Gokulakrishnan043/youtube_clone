/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import React from "react";
import { FiVideo, FiSearch,  FiBell } from "react-icons/fi";
import { Nav , Container, Form, Row, Col, Image } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
import "./topbar.scss";

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid>
      <div className="topbar">
        <div className="logo">
        <FaYoutube style={{ color: 'red', marginRight:'.5rem' }} />
             YouTube
        </div>
        
 <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="seaarch">
              <Form.Control
                type="search"
                placeholder=" Search "
                className=" search_area"
                style={{  padding: '10px 250px 10px 10px'  }} 
              />
              <span>
                <FiSearch className="text-black" style={{cursor:"pointer",fontSize: '24px',marginLeft:"1rem", borderRadius:"10px"}}/>

              </span>
            </div>
          </Nav>
       
      <div className= "social">
      <FiVideo style={{ fontSize: '24px', marginRight: '1rem', cursor:"pointer"}} />
  
  <FiBell style={{ fontSize: '24px', marginRight: '1rem', cursor:"pointer" }} />
  <Image
    src="https://e0.pxfuel.com/wallpapers/157/698/desktop-wallpaper-dark-knight-batman-logo.jpg"
    roundedCircle
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      cursor: "pointer",
    }}
  />
</div>



      </div>
    </Container>
    
  );
};

export default Topbar;
