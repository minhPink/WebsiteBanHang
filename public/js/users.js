// Chuc nang gui yeu cau kb
const listBtnAddFriends = document.querySelectorAll("[btn-add-friend]");
if(listBtnAddFriends.length > 0) {
    listBtnAddFriends.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".box-user").classList.add("add");
            const userId = button.getAttribute("btn-add-friend");

            socket.emit("CLIENT_ADD_FRIEND", userId);
        })
    })
}
// het chuc nang gui yeu cau kb

// Chuc nang huy kb
const listBtnCancelFriends = document.querySelectorAll("[btn-cancel-friend]");
if(listBtnCancelFriends.length > 0) {
    listBtnCancelFriends.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".box-user").classList.remove("add");
            const userId = button.getAttribute("btn-cancel-friend");

            socket.emit("CLIENT_CANCEL_FRIEND", userId);
        })
    })
}
// het chuc nang huy kb

// Chuc nang tu choi kb
const listBtnRefuseFriends = document.querySelectorAll("[btn-refuse-friend]");
if(listBtnRefuseFriends.length > 0) {
    listBtnRefuseFriends.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".box-user").classList.add("refuse");
            const userId = button.getAttribute("btn-refuse-friend");

            socket.emit("CLIENT_REFUSE_FRIEND", userId);
        })
    })
}
// het chuc nang ty choi kb

// Chuc nang chap nhan kb
const listBtnAcceptFriends = document.querySelectorAll("[btn-accept-friend]");
if(listBtnAcceptFriends.length > 0) {
    listBtnAcceptFriends.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".box-user").classList.add("accepted");
            const userId = button.getAttribute("btn-accept-friend");

            socket.emit("CLIENT_ACCEPT_FRIEND", userId);
        })
    })
}
// het chuc nang chap nhan kb

// SERVER_RETURN_LENGTH_ACCEPT_FRIEND
socket.on("SERVER_RETURN_LENGTH_ACCEPT_FRIENDS", (data) => {
    const bagdeAcceptFriends = document.querySelector("[badge-users-accept]");
    const userId = document.getAttribute("badge-users-accept");

    if(userId == data.userId){
        bagdeAcceptFriends.innerHTML = data.lengthAcceptFriends;
    }
})
// END SERVER_RETURN_LENGTH_ACCEPT_FRIEND
