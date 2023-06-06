const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
    organization: "org-e9LvttIoF3o21ySUOzFoq4oi",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const mockQuestion = [{"question": 'What is the best way to have a user upload an image, saving it to a data table, and then used for a profile picture?'}];

app.get('/api/openai/:prompt', async (req, res) => {
    console.log('testing openAI call')
    console.log(req.params.prompt)
    try {
        // const { location, description, activities } = req.body;
        // const prompt = req.params.prompt
        // res.send(data)
        // const response = await openai.createCompletion({
        //     model: "text-davinci-003",
        //     // "prompt": `I want you to act as a trip planner. I am going to ${location}. Here is a description of my trip: ${description} . Here are some activities I may do ${activities}. What should I pack for this trip? Write your response in the form of an array that looks like {'list': ['sandals', 'beach towel', 'sunglasses']}`,
        //     prompt: prompt,
        //     max_tokens: 500,
        //     temperature: 1,
        //     n: 1,
        //     frequency_penalty: 0,
        //     presence_penalty: 0,
        // });
        console.log(mockQuestion)
        res.send(mockQuestion)
        // console.log('new notes', response.data.choices[0])
        // res.json(response.data.choices[0].text)
        // console.log('testing', data)
        // console.log(JSON.parse(response.data.choices));
    } catch (e) {
        return res.status(400).json({ e });
    }
    
});

app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});
