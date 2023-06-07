import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="hero">
        <h1>Hero Section</h1>
      </div>

      {/* Card section */}
      <Container>
      <Row>
          <Col xs={12}>
            <Card className="mb-3">
              <Row noGutters>
                <Col xs={12} sm={4} className="d-flex justify-content-center justify-content-sm-start">
                  <Image src="https://miro.medium.com/v2/resize:fit:1000/format:webp/1*K4UH3KOsovJE7fzqdA23Fg.png" style={{ maxWidth: '100%', height: 'auto', width: '200px' }} roundedCircle className="p-3" />
                </Col>
                <Col xs={12} sm={8}>
                  <Card.Body>
                    <Card.Title>Meet Roshanell (she/her)</Card.Title>
                    <Card.Text>
                      Roshanell is an inspiring educator-turned-software engineer, bringing a unique blend of skills to the tech industry. Her fascination with leveraging software tools to enrich classroom learning and streamline lesson-planning led her to Techtonica, an organization dedicated to nurturing diversity in tech. During her time at Techtonica, Roshanell developed an innovative AI-powered application to revolutionize educational practices, further blending her passion for technology and education. With her newly-minted coding skills and deep educational insights, Roshanell stands poised to make significant contributions to any tech team, bringing a fresh and impactful perspective to software development.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className="mb-3">
              <Row noGutters>
                <Col xs={4}>
                  <Image src="https://miro.medium.com/v2/resize:fit:1000/format:webp/1*ZzUGWgV_iSVhWHHtQVPHSw.png"   style={{ maxWidth: '100%', height: 'auto', width: '300px' }} roundedCircle className="p-3" />
                </Col>
                <Col xs={8}>
                  <Card.Body>
                    <Card.Title>Meet Tanya (they/them)</Card.Title>
                    <Card.Text>
                    A life-long learner, Tanya is passionate about the intersection between tech and humans. Prior to joining Techtonica, they served as a library assistant where they used their skills acquired from their anthropology degree to coordinate various community events and programs. Their curiosity in tech grew as they led digital literacy classes and began to immerse themselves in the HTML, CSS, and the world of tech. They are excited to integrate their previous skills with those learned at Techtonica in order to create inclusive tech spaces by and for underrepresented communities.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className="mb-3">
              <Row noGutters>
                <Col xs={4}>
                  <Image src="path_to_image3.jpg" roundedCircle className="p-3" />
                </Col>
                <Col xs={8}>
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
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className="mb-3">
              <Row noGutters>
                <Col xs={4}>
                  <Image src="path_to_image4.jpg" roundedCircle className="p-3" />
                </Col>
                <Col xs={8}>
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

export default AboutSection;
