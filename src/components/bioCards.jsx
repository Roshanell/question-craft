import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Bio = () => {


  return (
    <div>
    
      {/* Card section */}
      <Container>
        <Row>
          <Col md={6} className="offset-md-3">
            <Card className="mb-3">
              <Row noGutters>
                <Col md={4}>
                  <Image src="path_to_image1.jpg" roundedCircle className="p-3" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>
                      Line 1<br />
                      Line 2<br />
                      Line 3<br />
                      Line 4<br />
                      Line 5
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <Card className="mb-3">
              <Row noGutters>
                <Col md={4}>
                  <Image src="path_to_image2.jpg" roundedCircle className="p-3" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>
                      Line 1<br />
                      Line 2<br />
                      Line 3<br />
                      Line 4<br />
                      Line 5
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <Card className="mb-3">
              <Row noGutters>
                <Col md={4}>
                  <Image src="path_to_image3.jpg" roundedCircle className="p-3" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <Card.Text>
                      Line 1<br />
                      Line 2<br />
                      Line 3<br />
                      Line 4<br />
                      Line 5
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <Card className="mb-3">
              <Row noGutters>
                <Col md={4}>
                  <Image src="path_to_image4.jpg" roundedCircle className="p-3" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card 4</Card.Title>
                    <Card.Text>
                      Line 1<br />
                      Line 2<br />
                      Line 3<br />
                      Line 4<br />
                      Line 5
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bio;



