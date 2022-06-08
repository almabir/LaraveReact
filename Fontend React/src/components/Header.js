import { Dropdown } from 'bootstrap'
import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Header() {
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate('/login');
  }
  let user = JSON.parse(localStorage.getItem('user-key'));
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto navbar-wrapper">
            {
              localStorage.getItem('user-key') ?
                <>
                  <Link to="/">Home</Link>
                  <Link to="/add">Add Product</Link>
                  <Link to="/update">Update Product</Link>
                  <Link to="/delete">Delete Product</Link>
                  <Link to="/search">Search Product</Link>
                </>
                :
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Sign Up</Link>
                </>
            }
            {/* <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/update">Product Update</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          {
            localStorage.getItem('user-key') ?

              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={user && user}
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              : null
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header