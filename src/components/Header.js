import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import {Link, NavLink} from "react-router-dom"
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary bg-gray-700 light:bg-white "
    >
      <Container className="font-semibold">
        <Navbar.Brand href="#home">
          <Link href="./Home/Home">
          <img
            src="https://www.admedusociety.org/adm.png"
            width="50px"
            height="50px"
            alt="logo"
            className="hidden dark:block light:block bg-white  rounded-2xl "
          /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-white/75">
          <Nav className="me-auto">
            {/*<NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
             <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="text-white gap-3">
            <NavLink to="/" className="text-white/75">HOME</NavLink>
            <NavLink to="/Internship">INTERNSHIPS</NavLink>
            <NavLink to="/PhotoGallery">PHOTOGALLERY</NavLink>
            <NavLink to="/Contactus">CONTACT-US</NavLink>
            <button className="bg-blue-600 px-3 rounded-lg ">LOGIN</button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
