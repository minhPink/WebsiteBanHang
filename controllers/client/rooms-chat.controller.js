// [GET] /rooms-chat/
module.exports.index = async (req, res) => {
    res.render("client/pages/rooms-chat/index", {
        pageTitle: "Danh sách phòng chat",
    });
};

// [GET] /rooms-chat/create
module.exports.createRoom = async (req, res) => {
    res.render("client/pages/rooms-chat/create", {
        pageTitle: "Tạo phòng chat",
    })
}