const toP = document.querySelector(".top")
window.addEventListener("scroll", function(){
        const X= this.pageYOffset;
    if(X>1){
        toP.classList.add("active")

    }
    else{
        toP.classList.remove("active")
    }
})