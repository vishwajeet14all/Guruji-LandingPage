import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Photo from '../assets/photo.png'
import { Col, Row } from 'react-bootstrap';

function Basic() {
  return (
    <div style={{backgroundColor:"#FFEFE3"}} >
    <div className='container' >      
      <Row style={{display:"flex",justifyContent:"space-evenly"}}>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Photo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card  style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Photo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Photo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{display:"flex",justifyContent:"space-evenly"}}>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Photo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Photo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Photo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default Basic;