window.onload = function() {
    const scrollContainer = document.querySelector('.cartegory-right-content-inner');
    const scrollAmount = 300;

    function scrollLeft() {
        if (scrollContainer.scrollLeft > 0) {
            scrollContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    function scrollRight() {
        if (scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }

    }

    // Gán hàm vào nút
    document.querySelector('.left-btn').onclick = scrollLeft;
    document.querySelector('.right-btn').onclick = scrollRight;
};