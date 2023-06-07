import { useState, useReducer } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Response from "./Response";

const initialValue = {
  accomplish: "",
  searched: "",
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "reset":
      return { ...initialValue };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function QuestionForm() {

	const [response, setResponse] = useState(null)
    const [state, dispatch] = useReducer(reducer, initialValue);

	const inputAction = (event) => {
		event.preventDefault();
		dispatch({
			type: "add",
			payload: { key: event.target.name, value: event.target.value },
		});
		// console.log(state)
      };

      // console.log(user)

      //A function to handle the post request
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(activities)
		// const userPrompt = 'testing'
        const userPrompt = `I want to accomplish ${state.accomplish}. I searched for ${state.searched}. I ran into this error ${state.error}. Please help me craft a question that I can send to my peers to ask for help`;
        // console.log(userPrompt)
            try {
              fetch(`http://localhost:8080/api/openai/${userPrompt}`)
                .then((response) => response.json())
                .then((data) => {
                  console.log("line 38 in suggestion box frontend - response", data);
                  setResponse(data);
                });
          dispatch({ type: "reset", initialValue });
          // console.log(state)
          // window.location = "/";
        } catch (error) {
          console.error(error.message);
        }
      };

	return (
    <div>
      <p>
        Formulating Your Question: Think about the technical problem or
        challenge you are facing. Take some time to clearly understand the issue
        and gather relevant information before proceeding. Enter Your Question:
        In the provided input field, enter your technical question. Be as clear
        and concise as possible while including all necessary details
      </p>
      <Form className="form-inputs" onSubmit={handleSubmit}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            I want to accomplish
          </InputGroup.Text>
          <Form.Control
            onChange={inputAction}
            name="accomplish"
            value={state.accomplish}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            I searched for
          </InputGroup.Text>
          <Form.Control
            onChange={inputAction}
            name="searched"
            value={state.searched}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            I am getting this error
          </InputGroup.Text>
          <Form.Control
            onChange={inputAction}
            name="error"
            value={state.error}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <button
          type="submit"
          className="orange-button"
          style={{ padding: "5px", margin: "3px" }}
        >
          Submit
        </button>
      </Form>
      {response ? <Response response={response} /> : null}
    </div>
  );
}

export default QuestionForm;
