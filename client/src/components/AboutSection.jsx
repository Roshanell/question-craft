qimport { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";

const AboutSection = () => {
	return (
		<div>
			{/* Card section */}
			<Container>
				<Row>
					<Col xs={12}>
						<Card className="mb-3">
							<Row>
								<Col xs={4}>
									<Image
										src="https://miro.medium.com/v2/resize:fit:1000/format:webp/1*ZzUGWgV_iSVhWHHtQVPHSw.png"
										style={{ maxWidth: "100%", height: "auto", width: "300px" }}
										roundedCircle
										className="p-3"
									/>
								</Col>
								<Col xs={8}>
									<Card.Body>
										<Card.Title>Meet Tanya (they/them)</Card.Title>
										<Card.Text>
											A life-long learner, Tanya is passionate about the
											intersection between tech and humans. Prior to joining
											Techtonica, they served as a library assistant where they
											used their skills acquired from their anthropology degree
											to coordinate various community events and programs. Their
											curiosity in tech grew as they led digital literacy
											classes and began to immerse themselves in the HTML, CSS,
											and the world of tech. They are excited to integrate their
											previous skills with those learned at Techtonica in order
											to create inclusive tech spaces by and for
											underrepresented communities.
										</Card.Text>
										<div className="d-flex justify-content-start">
											<a href="https://github.com/TanyaPina" className="mr-3">
												<Github
													size="2rem"
													style={{ marginRight: "0.5rem", color: "#05556d" }}
												/>
											</a>
											<a href="https://www.linkedin.com/in/tanyapina/">
												<Linkedin size="2rem" style={{ color: "#05556d" }} />{" "}
											</a>
										</div>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<Card className="mb-3">
							<Row>
								<Col xs={4}>
									<Image
										src="https://miro.medium.com/v2/resize:fit:1000/format:webp/1*JNoIODyECscyVkkSwuVXzw.png"
										style={{ maxWidth: "100%", height: "auto", width: "300px" }}
										roundedCircle
										className="p-3"
									/>
								</Col>
								<Col xs={8}>
									<Card.Body>
										<Card.Title>Meet Camille (she/her, they/them)</Card.Title>
										<Card.Text>
											After having led adult learners as a teacher with Teach
											For America, Camille is a proud participant of the
											Techtonica program, and excited to have the opportunity to
											learn again after having been out of school for many
											years. She is based in Philadelphia, but grew up in South
											Florida, where she fostered a love of singing and building
											community. About two years into the pandemic, Camille
											began craving an opportunity to learn new skills, and grow
											in a new field. They began learning how to code via
											freeCodeCamp and Skillcrush, before applying to Techtonica
											and learning how to build full stack applications. She is
											hopeful about the future and confident in her abilities to
											go far in this new field.
										</Card.Text>
										<div className="d-flex justify-content-start">
											<a
												href="https://github.com/presidentcami"
												className="mr-3"
											>
												<Github
													size="2rem"
													style={{ marginRight: "0.5rem", color: "#05556d" }}
												/>
											</a>
											<a href="https://www.linkedin.com/in/camille-williams-phl/">
												<Linkedin size="2rem" style={{ color: "#05556d" }} />
											</a>
										</div>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<Card className="mb-3">
							<Row>
								<Col
									xs={12}
									sm={4}
									className="d-flex justify-content-center justify-content-sm-start"
								>
									<Image
										src="https://miro.medium.com/v2/resize:fit:1000/format:webp/1*K4UH3KOsovJE7fzqdA23Fg.png"
										style={{ maxWidth: "100%", height: "auto", width: "200px" }}
										roundedCircle
										className="p-3"
									/>
								</Col>
								<Col xs={12} sm={8}>
									<Card.Body>
										<Card.Title>Meet Roshanell (she/her)</Card.Title>
										<Card.Text>
											Roshanell is an inspiring educator-turned-software
											engineer, bringing a unique blend of skills to the tech
											industry. Her fascination with leveraging software tools
											to enrich classroom learning and streamline
											lesson-planning led her to Techtonica, an organization
											dedicated to nurturing diversity in tech. During her time
											at Techtonica, Roshanell developed an innovative
											AI-powered application to revolutionize educational
											practices, further blending her passion for technology and
											education. With her newly-minted coding skills and deep
											educational insights, Roshanell stands poised to make
											significant contributions to any tech team, bringing a
											fresh and impactful perspective to software development.
										</Card.Text>
										<div className="d-flex justify-content-start">
											<a href="https://github.com/Roshanell" className="mr-3">
												<Github
													size="2rem"
													style={{ marginRight: "0.5rem", color: "#05556d" }}
												/>
											</a>
											<a href="https://www.linkedin.com/in/roshanellfrancisco/">
												<Linkedin size="2rem" style={{ color: "#05556d" }} />
											</a>
										</div>
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
									<Image
										src="https://miro.medium.com/v2/resize:fit:1000/format:webp/1*Oxhs2VdlOI1z1javQI1s4w.jpeg"
										style={{ maxWidth: "100%", height: "auto", width: "300px" }}
										roundedCircle
										className="p-3"
									/>
								</Col>
								<Col xs={8}>
									<Card.Body>
										<Card.Title>Meet Rahma (she/her)</Card.Title>
										<Card.Text>
											Rahma is a San Francisco Bay Area native and undergraduate
											at UC Berkeley where she serves as Regents & Chancellors
											Scholar. Her initial introduction to coding was as a
											Research Apprentice, where she honed her analytical
											prowess in utilizing Python libraries for mixed-method
											data analysis. After an internship for an NGO in East
											Africa, she was inspired to build web application
											solutions tackling critical issues such as telemedicine
											care in rural Kenya. As a software engineer, Rahma is
											committed to building transformative products that inspire
											innovation and reach diverse communities worldwide.
										</Card.Text>
										<div className="d-flex justify-content-start">
											<a
												href="https://github.com/rahmamahdi02"
												className="mr-3"
											>
												<Github
													size="2rem"
													style={{ marginRight: "0.5rem", color: "#05556d" }}
												/>
											</a>
											<a href="https://www.linkedin.com/in/rahmamahdi/">
												<Linkedin size="2rem" style={{ color: "#05556d" }} />
											</a>
										</div>
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
