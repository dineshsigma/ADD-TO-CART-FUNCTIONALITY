import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Profile from '../dashboard/profile';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Form from 'react-bootstrap/Form';

function DashboardNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function OffCanvasExample({ name, ...props }) {
    return (
      <>
       <Form>
       <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <img style={{ "border-radius": "50%", "margin-left": "38%", "width": "30%", "height": "20%" }}
              alt=""
              src="https://e0.pxfuel.com/wallpapers/898/500/desktop-wallpaper-pawan-kalyan-janasena-pawan-kalyan-thumbnail.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top" />
              <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
              
          </Offcanvas.Body>
          
        </Offcanvas>
       </Form>
       
      </>
    );
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ "margin-left": "90%" }}>
            <Navbar.Brand >{'Hello Dinesh'}</Navbar.Brand>
            <img style={{ "border-radius": "50%" }} onClick={handleShow}
              alt=""
              src="https://e0.pxfuel.com/wallpapers/898/500/desktop-wallpaper-pawan-kalyan-janasena-pawan-kalyan-thumbnail.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <OffCanvasExample placement='end' name='end' />
    </>
  )

}


export default DashboardNavbar