//-----------------------------------Menu item-------------------------------------
const toP = document.querySelector(".top")
window.addEventListener("scroll", function() {
        const X = this.pageYOffset;
        if (X > 1) {
            toP.classList.add("active")
        } else {
            toP.classList.remove("active")
        }
    })
    //------------------------------------menu-slidebar-cartegory-------------------------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu) {
        menu.addEventListener("click", function() {
            menu.classList.toggle("block")
        })
    })
    //------------------------------------PRODUCT-------------------------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem, X) {
    imgItem.addEventListener("click", function() {
        bigImg.src = imgItem.src
    })
})

const chitietsanpham = document.querySelector(".chitietsanpham")
const gioithieu = document.querySelector(".gioithieu")
const baoquan = document.querySelector(".baoquan")
if (chitietsanpham) {
    chitietsanpham.addEventListener("click", function() {
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-chitietsanpham").style.display = "block"
    })
}
if (gioithieu) {
    gioithieu.addEventListener("click", function() {
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-chitietsanpham").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}
if (baoquan) {
    baoquan.addEventListener("click", function() {
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-chitietsanpham").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
const butTon = document.querySelector(".product-content-right-bottom-top")
if (butTon) {
    butTon.addEventListener("click", function() {
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}
//----------------------------------size------------------------------
document.querySelectorAll('.size span').forEach(function(sizeOption) {
    sizeOption.addEventListener('click', function() {
        // Toggle 'active' class on click
        this.classList.toggle('active');
    });
});