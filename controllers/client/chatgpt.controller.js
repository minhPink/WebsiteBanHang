// [GET] /chat-gpt
module.exports.index = (req, res) => {
    res.render("client/pages/chatgpt/index", {
        pageTitle: "ChatGPT",
    })
};