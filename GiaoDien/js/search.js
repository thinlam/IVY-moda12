// index.html
function searchIndex() {
    const searchInput = document.getElementById("searchIndex");

    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            const query = searchInput.value.toLowerCase();

            // Product names and keywords for matching
            const productNames = [
                "đầm tuysi cổ đức attina 2 lớp",
                "đầm tuysi a yellow",
                "đầm lụa fairy họa tiết",
                "đầm pink silk sarong lady",
                "đầm a xếp ly rose red"
            ];
            const categoryKeywords = ["đầm", "áo", "quần"];

            // Check for product-specific redirect
            if (productNames.includes(query)) {
                window.location.href = "product.html";
            }
            // Check for category-specific redirect
            else if (categoryKeywords.some(keyword => query.includes(keyword))) {
                window.location.href = "cartegory.html";
            }
            // Search for partial matches
            else {
                const matches = productNames.filter(name => name.includes(query));
                if (matches.length > 0) {
                    alert(`Products matching "${query}":\n- ${matches.join("\n- ")}`);
                    // Optionally redirect to category page where results could be displayed
                    // window.location.href = "cartegory.html";
                } else {
                    alert("No matching products found.");
                }
            }
        }
    });
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