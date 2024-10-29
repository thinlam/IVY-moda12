document.querySelectorAll('.size span').forEach(function(sizeOption) {
    sizeOption.addEventListener('click', function() {
        // Toggle 'active' class on click
        this.classList.toggle('active');
    });
});