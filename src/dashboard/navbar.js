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

  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

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
                src={file}
                width="30"
                height="30"
                className="d-inline-block align-top" />
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Profile Pic:</Form.Label>
                <Form.Control type="file" placeholder="upload Image" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={'dinesh@iipl.work'} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mobile:</Form.Label>
                <Form.Control type="number" placeholder=" Enter mobile" value={'8106838432'} />
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
              src={file}
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