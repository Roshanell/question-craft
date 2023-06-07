import { Row } from "react-bootstrap"
import '/src/components/HeaderSection.css'

function AboutHeader() {
	return (
		<div className="row row_center blue-background">
			<h1 className="h1-white-text">About</h1>
            <h3 className="h3-white-text"> Taking the guesswork out of building a great question!</h3>
		</div>
	);
}

export default AboutHeader;