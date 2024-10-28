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
// Function to perform the search
// Function to perform the search
// Function to perform the search
// Sanitize input to prevent XSS
function sanitizeInput(input) {
    // Remove potential XSS patterns
    return input.replace(/[<>\/]/g, '');
}

function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let sanitizedInput = sanitizeInput(input); // Sanitize input to remove XSS attacks
    let products = document.querySelectorAll(".cartegory-right-content-item h1");

    let found = false;
    let xssDetected = input !== sanitizedInput; // Detect XSS
    const xssPattern = /<|>|script|&lt|&gt/gi;
    let isXSSAttack = xssPattern.test(input);




    if (isXSSAttack) {
        alert("XSS attack detected. Clearing all product listings for security.");

        // Clear all products
        products.forEach(product => {
            product.parentElement.style.display = "none";
        });

        // Clear the input field
        inputElement.value = '';
        return;
    }

    // Normal search logic
    products.forEach(product => {
        if (product.innerText.toLowerCase().includes(input)) {
            product.parentElement.style.display = "block"; // Show matching product
            found = true;
        } else {
            product.parentElement.style.display = "none"; // Hide non-matching product
        }
    });
    // If no products are found, display normal alert
    if (!found) {
        alert("No matching products found.");
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