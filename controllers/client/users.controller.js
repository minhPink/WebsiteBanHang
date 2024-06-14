const Users = require("../../models/users.model");
const userSocket = require("../../sockets/client/users.socket");
// [GET] /users/not-friends
module.exports.notFriends = async (req, res ) => {
    // socketUser
    userSocket(res);
    //socketUser
    const userId = res.locals.user.id;

    const requestFriends = res.locals.user.requestFriends;

    const acceptFriends = res.locals.user.acceptFriends;

    const users = await Users.find({
        $and: [
            { _id: { $ne : userId } },
            { _id: { $nin: requestFriends } },
            { _id: { $nin: acceptFriends } },
        ],
        status: "active",
        deleted: false
    }).select("avatar fullName");


    res.render("client/pages/users/not-friends", {
        pageTitle: "Danh sach nguoi dung",
        users: users
    })
}

// [GET] /users/request
module.exports.request = async (req, res) => {
    // socketUser
    userSocket(res);
    //socketUser
    const userId = res.locals.user.id;

    const requestFriends = res.locals.user.requestFriends;

    const users = await Users.find({
        _id: { $in : requestFriends },
        status: "active",
        deleted: false,
    }).select("avatar fullName")

    res.render("client/pages/users/request", {
        pageTitle: "Loi moi da gui",
        users: users
    })
}

// [GET] /users/accept
module.exports.accept = async (req, res) => {
    // socketUser
    userSocket(res);
    //socketUser
    const userId = res.locals.user.id;

    const acceptFriends = res.locals.user.acceptFriends;

    const users = await Users.find({
        _id: { $in : acceptFriends },
        status: "active",
        deleted: false,
    }).select("avatar fullName")

    res.render("client/pages/users/accept", {
        pageTitle: "Loi moi ket ban",
        users: users
    })
}