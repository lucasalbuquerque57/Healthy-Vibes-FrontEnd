import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

export function ResponsiveOption(){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
        <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas className="bg-danger" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
} 