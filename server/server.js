const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file
const { Configuration, OpenAIApi, ApiException } = require('openai'); // Import ApiException for specific error handling

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Configuration for OpenAI API
const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION_ID,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Endpoint to handle OpenAI requests
app.get('/api/openai/:prompt', async (req, res) => {
    console.log('Testing OpenAI call');
    try {
        const prompt = req.params.prompt;
        console.log('Received prompt:', prompt);

        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo", //swapped for new model as Davinci has been decrapetated.
            prompt: prompt,
            max_tokens: 500,
            temperature: 1,
            n: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        console.log('Response:', response.data.choices[0].text);
        res.json(response.data.choices[0].text);
    } catch (e) {
        if (e instanceof ApiException && e.response.status === 429) {
            // Handle rate limit error as OpenAi know longer gives free credits
            return res.status(429).json({ error: "API rate limit reached. Please try again later." });
        } else {
            console.error('Error occurred:', e);
            return res.status(500).json({ error: e.message });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
