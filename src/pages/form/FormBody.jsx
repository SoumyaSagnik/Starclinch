import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const FormBody = () => {
  return (
    <div className="formBody">
      <ContentWrapper>
        <Container className="formContainer">
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formOccassion">
                <Form.Label className="formLabel">
                  What's the occasion?
                </Form.Label>
                <Form.Select>
                  <option value="1">Virtual</option>
                  <option value="2">Video Shoutout</option>
                  <option value="3">Campus</option>
                  <option value="4">Corporate</option>
                  <option value="5">Private Party</option>
                  <option value="6">Concert/Festival</option>
                  <option value="7">Wedding</option>
                  <option value="8">Restaurant</option>
                  <option value="9">Professional Hiring</option>
                  <option value="10">Inauguration</option>
                  <option value="11">Photo/Video Shoot</option>
                  <option value="12">Religious</option>
                  <option value="13">Charity</option>
                  <option value="14">Fashion Show</option>
                  <option value="15">Kids Party</option>
                  <option value="16">Exhibition</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formOccassion">
                <Form.Label className="formLabel">Event Date</Form.Label>
                <Form.Control type="date" name="eventDate" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formVenue">
              <Form.Label className="formLabel">Venue Address</Form.Label>
              <Form.Control type="text" required></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBudget">
                <Form.Label className="formLabel">Budget</Form.Label>
                <Form.Control type="number" step={1} min={40000}></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formAttendance">
                <Form.Label className="formLabel">
                  How many people will attend?
                </Form.Label>
                <Form.Control type="number" step={1} min={1}></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="formLabel">Full Name</Form.Label>
              <Form.Control type="text" required></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="formLabel">
                  Email Address (No Spam!)
                </Form.Label>
                <Form.Control type="email"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="formLabel">Phone Number</Form.Label>
                <InputGroup>
                  <InputGroup.Text>+91</InputGroup.Text>
                  <Form.Control type="tel" placeholder="Phone Number" />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formMore">
              <Form.Label className="formLabel">
                Tell us more (we love to listen)
              </Form.Label>
              <Form.Control as="textarea"></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formOptions">
                <Form.Label className="formLabel">
                  Send more options in my budget
                </Form.Label>
                <Form.Select>
                  <option value="1">Yes</option>
                  <option value="2">Don't</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </ContentWrapper>
    </div>
  );
};

export default FormBody;
