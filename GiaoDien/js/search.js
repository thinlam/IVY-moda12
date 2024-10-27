function searchIndex() {
    var input = document.getElementById('searchIndex').value.toLowerCase();
    var categories = document.getElementsByClassName('top-menu-item');

    for (var i = 0; i < categories.length; i++) {
        var categoryName = categories[i].parentElement.textContent.toLowerCase();

        if (categoryName.indexOf(input) > -1) {
            categories[i].parentElement.style.display = "";
        } else {
            categories[i].parentElement.style.display = "none";
        }
    }
}

// Function to perform the search
function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".cartegory-right-content-item h1");

    let found = false;
    products.forEach(product => {
        if (product.innerText.toLowerCase().includes(input)) {
            product.parentElement.style.display = "block"; // Show matching product
            found = true;
        } else {
            product.parentElement.style.display = "none"; // Hide non-matching product
        }
    });

    // Display XSS alert if no products found
    if (!found) {
        alert("<xin chào>");
        document.getElementById("noResultsMessage").style.display = "block";
    } else {
        document.getElementById("noResultsMessage").style.display = "none";
    }
}

// Run search on Enter key press
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});