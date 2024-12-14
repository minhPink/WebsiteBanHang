// button-status
const buttonStatus = document.querySelectorAll("[button-status]");

if (buttonStatus.length > 0) {
    let url = new URL(window.location.href);

    buttonStatus.forEach(button => {
        button.addEventListener("click", () => {

            const status = button.getAttribute("button-status");
            if(status){
                url.searchParams.set("status", status);
            } else {
                url.searchParams.set("status", "");
            }
            window.location.href = url.href;
            console.log(url);

        })
    })
}
// end button-status
// button-search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    formSearch.addEventListener("submit", (e) => {
        let url = new URL(window.location.href);
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
    
        if(formSearch){
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    })
}


// end button-search
//button navigation
const buttonNavigation = document.querySelectorAll("[button-navigation]");

let url = new URL(window.location.href);
buttonNavigation.forEach(button => {
    button.addEventListener("click", () => {
        const page = button.getAttribute("button-navigation");
        console.log(page);
        url.searchParams.set("page", page);
        window.location.href = url.href;
    })
})
//end button navigation

//check box multi
const checkMulti = document.querySelector("[checkbox-multi]");
if (checkMulti) {
    const checkAll = checkMulti.querySelector("input[name='checkall']");
    const checkId = checkMulti.querySelectorAll("input[name='id']");
    checkAll.addEventListener("click", () => {
        checkId.forEach(checkbox => {
            if(checkAll.checked == true){
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }
        })
    })

    checkId.forEach(checkbox => {
        checkbox.addEventListener("click", () => {
            const countCheckBox = checkMulti.querySelectorAll("input[name='id']:checked").length;
            if(countCheckBox == checkId.length){
                checkAll.checked = true;
            } else {
                checkAll.checked = false;
            }
        })
    })
}
//end check box multi

// form change multi
const formChangeMulti = document.querySelector("[form-charge-multi]");
if (formChangeMulti) {
    formChangeMulti.addEventListener("submit", (e) => {
        e.preventDefault();

        const checkMulti = document.querySelector("[checkbox-multi]");
        const inputCheckbox = checkMulti.querySelectorAll("input[name='id']:checked");
        const inputIDs = formChangeMulti.querySelector("input[name='ids']");

        const typeChoose = e.target.elements.type.value;

        if(typeChoose == "delete-all"){
            const isConfirm = confirm("Ban co chac muon xoa tat ca khong ? ");
            if(!isConfirm){
                return;
            }
        };

        let ids = [];
        if(inputCheckbox.length >= 1){       
            inputCheckbox.forEach(input => {
                const id = input.value;
                
                if(typeChoose == "change-position"){
                    const position = input.closest("tr").querySelector("input[name='position']").value;
                    ids.push(id +"-"+ position);
                } else {
                    ids.push(id);
                }
            }); 
        }
        inputIDs.value = ids.join(", ");
        formChangeMulti.submit();
    })
}
// end form change multi

// Show Alert
const showAlert = document.getElementById("alert");
const inAlert = document.querySelector("[show-alert]");
if (inAlert) {
    const exit = document.querySelector("[exit]");
    const time = parseInt(inAlert.getAttribute('time'));
    setTimeout(() => {
        showAlert.classList.add("hidden-alert");
    },time);
    exit.addEventListener("click", () => {
        showAlert.classList.add("hidden-alert");
    })
}
// End Show Alert



// Preview img before uploads
const chooseImg = document.querySelector("[choose-img]");
if (chooseImg) {
    const previewImg = document.querySelector("[preview-img]");
    chooseImg.addEventListener("change", () => {
        const [file] = chooseImg.files;
        console.log(chooseImg.files);
        if(file){
            previewImg.src = URL.createObjectURL(file);
        };

        if(chooseImg.files){
            const removePreview = document.querySelector("[remove-preview]");
            removePreview.classList.remove("hidden-remove");
            removePreview.classList.add("show-remove");

            removePreview.addEventListener("click", () => {
                chooseImg.value = "";
                previewImg.src = "";
                removePreview.classList.remove("show-remove");
                removePreview.classList.add("hidden-remove");
            })
        };
    })

}
// End preview img before uploads


// Form Sort
const formSort = document.querySelector("[sort]");
if (formSort) {
    let url = new URL(window.location.href);
    const sortSelect = document.querySelector("[sort-select]");

    sortSelect.addEventListener("change", (e) => {
        console.log(e);
        const valueOption = e.target.value;
        const [sortKey, sortValue] = valueOption.split("-");
        
        url.searchParams.set("sortKey", sortKey);
        url.searchParams.set("sortValue", sortValue);

        window.location.href = url;

    });
};
// End Form Sort

// Select status orders
const listSelectStatus = document.querySelectorAll("#order-status-select");

if (listSelectStatus) {
    // Hàm thay đổi màu nền của select khi thay đổi giá trị
    const changeSelectColor = (selectStatus, status) => {
        // Xóa tất cả các lớp màu trước
        selectStatus.classList.remove('bg-info', 'bg-success', 'bg-danger', 'bg-warning');

        // Thêm lớp màu mới dựa trên trạng thái
        if (status === "status-delivering") {
            selectStatus.classList.add('bg-info'); // Xanh nước biển
        } else if (status === "status-success") {
            selectStatus.classList.add('bg-success'); // Xanh lá cây
        } else if (status === "status-refuse") {
            selectStatus.classList.add('bg-danger'); // Đỏ
        } else if (status === "status-spending") {
            selectStatus.classList.add('bg-warning'); // Vàng
        }
    };

    // Lặp qua tất cả các select và thay đổi màu nền ngay khi trang tải
    listSelectStatus.forEach(selectStatus => {
        const initialStatus = selectStatus.value;  // Lấy giá trị trạng thái ban đầu
        changeSelectColor(selectStatus, initialStatus); // Gọi hàm để thay đổi màu nền khi trang được tải

        selectStatus.addEventListener("change", (e) => {
            const status = e.target.value;
            changeSelectColor(selectStatus, status);  // Thay đổi màu khi chọn trạng thái mới
        });
    });
}


// End select status orders



