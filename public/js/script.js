// Show Alert
const showAlert = document.getElementById("alert");
const inAlert = document.querySelector("[show-alert]");
if(inAlert){
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
// SwiperIntroduce
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
        grabCursor: true,
    });
//End SwiperIntroduce

// SHOW ITEM //
document.getElementById('see-more-btn').addEventListener('click', function() {
    // Lấy tất cả các sản phẩm bị ẩn (class 'hidden')
    const hiddenProducts = document.querySelectorAll('.hidden');
    
    // Hiện 4 sản phẩm đầu tiên trong danh sách bị ẩn
    hiddenProducts.forEach((product, index) => {
      if (index < 4) { // Chỉ hiển thị 4 sản phẩm đầu tiên
        product.classList.remove('hidden');
      }
    });
    // Nếu không còn sản phẩm nào bị ẩn, ẩn nút "Xem thêm"
    if (hiddenProducts.length <= 4) {
      this.style.display = 'none';
    }
  });
  
// END SHOW ITEM //

// SP BÁN CHẠY //

const h2 = document.querySelector("h2.inner-title");
if (h2 && h2.textContent.trim() === "⚡️ Sản phẩm bán chạy 🔥") {
  h2.style.color = "white"; 
  h2.style.marginBottom = "20px"; 
}
// END SP BÁN CHẠY //
