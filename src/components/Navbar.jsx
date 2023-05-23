import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
const NavbarComponent = () => {
    const [isHoverCharacters, setIsHoverCharacters] = useState(false)
    const [isHoverHome, setIsHoverHome] = useState(false)
    const [isActiveHome, setIsActiveHome] = useState(false)
    const [isActiveCharacters, setIsActiveCharacters] = useState(true)
    const [isHoverBell, setIsHoverBell] = useState(false)
    const [isHoverSettings, setIsHoverSettings ] = useState(false)

    const homeStyles = isActiveHome ? {
        background: "linear-gradient(to top, #231F20 0%, rgba(34, 34, 34, 0) 100%)",
        color: "#C89B3C",
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: '14px',
      } : {
          backgroundColor: "black",
          color: isHoverHome ? '#c89c3c71' : "#F0E6D2",
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: '14px'
        };
    const charactersStyles = isActiveCharacters ? {
      background: "linear-gradient(to top, #231F20 0%, rgba(34, 34, 34, 0) 100%)",
      color: "#C89B3C",
      width: "100px",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: '14px'
    } : {
        backgroundColor: "black",
        color: isHoverCharacters ? "#c89c3c71" : "#F0E6D2",
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: '14px'
      };
      const imgHomeStyles= isActiveHome ? {
        position: 'absolute', 
        top: 0 
        } : {
            position: 'absolute', 
            top: 0, 
            filter: 'opacity(0.5)', 
            display: isHoverHome ? 'block' : 'none'
        };
    const imgCharactersStyles = isActiveCharacters ? {
        position: 'absolute', 
        top: 0 
        } : {
            position: 'absolute', 
            top: 0, 
            filter: 'opacity(0.5)', 
            display: isHoverCharacters ? 'block' : 'none'
        };
    return (
    <Navbar bg="black" expand="lg" className='my-0 py-0' style={{borderBottom: '1px solid #2E2E2E'}}>
      <Container fluid className='mx-5'>
        <Navbar.Brand><img src="./marvel-logo.webp" style={{width: '200px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor: '#F0E6D2'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100%' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={homeStyles}
            onMouseEnter={()=>setIsHoverHome(true)}
            onMouseLeave={()=>setIsHoverHome(false)}
            onClick={()=>{setIsActiveHome(true)
            setIsActiveCharacters(false)}}
            ><img src="./inMenu.svg" style={imgHomeStyles}/> HOME</Nav.Link>
            <Nav.Link href="#action2" style={charactersStyles} 
            onMouseEnter={()=>setIsHoverCharacters(true)}
            onMouseLeave={()=>setIsHoverCharacters(false)}
            onClick={()=>{setIsActiveCharacters(true)
            setIsActiveHome(false)}}
            ><img src="./inMenu.svg" style={imgCharactersStyles}/>PERSONAJES</Nav.Link>
          </Nav>
          <img src="./notification.svg" style={{position: 'relative', right: '3rem', cursor:'pointer', filter: isHoverBell ? '' : 'grayscale(80%) brightness(160%)'}} 
          onMouseEnter={()=>setIsHoverBell(true)}
          onMouseLeave={()=>setIsHoverBell(false)}/>
          <div style={{position: 'relative', bottom: '0.7rem', cursor:'pointer', filter: isHoverSettings ? 'brightness(55%) saturate(850%)' : ''}}
          onMouseEnter={()=>setIsHoverSettings(true)}
          onMouseLeave={()=>setIsHoverSettings(false)}>
          <img src="./settings.svg" alt="" style={{position: 'absolute'}}/>
          <img src="./elipse.svg" alt="" style={{position: 'absolute', left: '0.3rem', top:'0.3rem'}}/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavbarComponent;