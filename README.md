#  Question-Craft

## About The Project

Question-Craft is a web application that generates questions using the Chat GPT OpenAI API based on user input. It utilizes React and Bootstrap for the frontend and Node.js with Express for the backend.

[![GitHub Pull Request](https://img.shields.io/github/issues-pr-closed/Roshanell/question-craft)](https://github.com/Roshanell/question-craft/pulls)
[![GitHub repo size](https://img.shields.io/github/repo-size/Roshanell/question-craft)](https://github.com/Roshanell/question-craft/)
[![GitHub contributors](https://img.shields.io/github/contributors/Roshanell/question-craft)](https://github.com/Roshanell/question-craft/)

## Table of Contents

- [Built With](#Built-With)
- [Installation](#installation)
- [User Flow](#User-Flow)
- [Configuration](#configuration)

## Built With 

- **Front-end**: The front-end of the application is built using HTML, CSS, and JavaScript.

- **Back-end**: Node.js with Express is used to handle API requests and communicate with the OpenAI API.

- **Frameworks and Libraries**: The application leverages frameworks and libraries such as React, Express, and Bootstrap to enhance development efficiency and improve user experience.

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>HTML
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
  
</table>

## User Flow

Once you have the Question-Craft application set up and running, follow these steps to generate questions:

1. Enter your input text in the provided text input field.
2. Click the "Generate Questions" button.
3. The application will send the input to the backend, which will communicate with the OpenAI API.
4. The generated questions will be displayed on the screen.

Feel free to experiment with different inputs and explore the generated questions!


## Installation

```bash
git clone https://github.com/Roshanell/question-craft.git
```
Access project repo

```bash
cd question-craft
```
Remove owner git from the main directory using

```bash
rm -rf .git
```

While still within the main directory in your terminal, run the command git init to start your own git 

```bash
git init
```

Access server.js file and install dependencies.

```bash
cd server
npm install
```
Create a `.env` file in your server file and enter your Auth0 credential.

```bash
cd server
touch .env
```

Open another terminal then cd into the client, install dependencies

```bash
cd client
npm install
```

Start the browser

```bash
cd server
npm run dev
```
Note:
Server runs on http://localhost:8080 and client on http://localhost:5173 


## Configuration

The Question-Craft application requires an OpenAI API key to communicate with the Chat GPT API. 
Follow these steps to set up your API key:

1. Go to the OpenAI website and sign in to your account (or create a new one).
2. Generate an API key for the Chat GPT API.
3. Copy the API key.
4. In the backend directory of the Question-Craft project, create a .env file.
5. Inside the .env file, add the following line and replace YOUR_API_KEY with your actual API key:

```bash
REACT_APP_OPENAI_API_KEY=YOUR_API_KEY
```


