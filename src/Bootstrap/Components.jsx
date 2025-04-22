import React, { useState } from "react";
import { Container, Row, Col, Button, Alert, Card, Navbar, Nav, Form, FormControl, Modal } from "react-bootstrap";

function Components() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">My React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Container */}
      <Container className="p-4">

        {/* Alert */}
        <Alert variant="success" className="text-center">
          Welcome to the production-ready React + Bootstrap demo!
        </Alert>

        {/* Grid Layout */}
        <Row className="mb-4">
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Card One</Card.Title>
                <Card.Text>This is a simple card with some text content.</Card.Text>
                <Button variant="primary" onClick={handleShow}>Open Modal</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3 bg-light">
              <Card.Body>
                <Card.Title>Card Two</Card.Title>
                <Card.Text>This card uses a light background and primary button.</Card.Text>
                <Button variant="success">Click Me</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3 bg-warning text-white">
              <Card.Body>
                <Card.Title>Card Three</Card.Title>
                <Card.Text>This is a highlighted warning card.</Card.Text>
                <Button variant="light" className="text-dark">Okay</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Centered Button */}
        <div className="d-flex justify-content-center">
          <Button variant="danger" className="px-4" onClick={handleShow}>
            Launch Modal
          </Button>
        </div>

      </Container>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>React-Bootstrap Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a simple modal opened from a button.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Components;