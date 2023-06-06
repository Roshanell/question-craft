import { Row } from "react-bootstrap"
import '/src/components/HeaderSection.css'

function HeaderSection() {
	return (
		<div class="row row_center blue-background">
			<h1 class="h1-white-text">Welcome to Techtonica's Question Builder</h1>
            <h3 class="h3-white-text"> Taking the guesswork out of building a great question!</h3>
		</div>
	);
}

export default HeaderSection;