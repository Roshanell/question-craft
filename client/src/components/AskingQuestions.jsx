import '/src/components/AskingQuestions.css'

function AskingQuestions() {
	return (
		<div className="row row_center">
            <div className="column">
            <h6 className="justify">Why ask questions? The ability to ask questions that lead to useful answers is a must-have skill for 
            software engineers because they are constantly solving problems. Asking the right questions helps engineers arrive at 
            solutions more quickly and make faster progress.</h6>
            </div>
            <div className="column">
            <a href="https://github.com/Techtonica/curriculum/blob/main/onboarding/asking-good-questions.md" 
            className="orange-button" target="_blank" rel="noopener no referrer">Learn more about questions from our curriculum </a>
            </div>
		</div>
	);
}

export default AskingQuestions;