const { OpenAI } = require("openai");
require('dotenv').config();

const openai = new OpenAI({
  apiKey: 'sk-BecQcuLzEZaQXOndcVUVC8mYjenoa1LuopYejShGW9T3BlbkFJ5BKXxrLKxC8_kPWRtNtiOLgrsNZlZqVW_kr8PIcM8A',
});

const chatCompletion = async (prompt) => {

  try {

    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: `You are a helpfull assistant.` },
        { role: "user", content: prompt }
      ],
      model: "gpt-3.5-turbo",
    });

    let content = response.choices[0].message.content;
  
    return {
      status: 1,
      response: content
    };
  } catch (error) {
    return {
      status: 0,
      response: 'Please check openai api key.'
    };
  }
};


module.exports = {
  chatCompletion
};
