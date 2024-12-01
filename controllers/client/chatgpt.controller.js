// [GET] /chat-gpt
module.exports.index = (req, res) => {
    res.render("client/pages/chatgpt/index",{
        
    })
};

// [POST] /chat-gpt
module.exports.post = async (req, res) => {
    try {
        const prompt = req.body.prompt;

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." }, 
                { role: "user", content: prompt } 
            ],
        });

        res.status(200).send({
            bot: response.choices[0].message.content 
        });

    } catch (error) {
        console.error(error);
        res.status(500).send(error || 'Something went wrong');
    }

}