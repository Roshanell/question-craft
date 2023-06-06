import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function QuestionForm() {
	return (
		<div>
			<p>
				Formulating Your Question: Think about the technical problem or
				challenge you are facing. Take some time to clearly understand the issue
				and gather relevant information before proceeding. Enter Your Question:
				In the provided input field, enter your technical question. Be as clear
				and concise as possible while including all necessary details
			</p>
			<div className="form-inputs">
				<InputGroup size="lg">
					<InputGroup.Text id="inputGroup-sizing-lg">
						I want to accomplish
					</InputGroup.Text>
					<Form.Control
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</InputGroup>
				<InputGroup size="lg">
					<InputGroup.Text id="inputGroup-sizing-lg">
						I searched for
					</InputGroup.Text>
					<Form.Control
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</InputGroup>
				<InputGroup size="lg">
					<InputGroup.Text id="inputGroup-sizing-lg">
						I am getting this error
					</InputGroup.Text>
					<Form.Control
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</InputGroup>
				<button type='submit' className="orange-button" style={{ padding: '5px', margin: '3px'}}>Submit</button>
			</div>
		</div>
	);
}

export default QuestionForm;
