import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5} className="text-center">
            <h3>
              Join Academic Rescue, where we're dedicated to bridging the gap
              between missed classes and exam success!
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7} className="d-flex justify-content-center">
            <div className="new-email-bx">
              <button
                type="button" // Change to "button" to prevent form submission if inside a form
                className="btn"
                onClick={() =>
                  (window.location.href =
                    "https://chat.whatsapp.com/Gnrhy1BVjDd9mNfQeDBEwh")
                }
              >
                Join With Us
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
