import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import photo from "../assets/img/tu.jpg";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col >
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col  className="profile-image-container">
            <div className="profile-image">
              <img src={photo} alt="Profile" />
            </div>
          </Col>
          <Col  className="para">
            <div >
            <h3>Thanks for visiting!</h3>
            </div>
          </Col>

        </Row>
      </div>
    </Col>
  );
};
