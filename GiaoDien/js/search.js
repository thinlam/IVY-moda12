// index.html
function searchIndex() {
    const searchInput = document.getElementById("searchIndex");

    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            const query = searchInput.value.toLowerCase().trim();

            // Product names and SKUs for matching
            const products = [
                { name: "đầm tuysi cổ đức attina 2 lớp", sku: "48B9902", page: "product.html" },
                { name: "đầm tuysi a yellow", sku: "48B9918", page: "product1.html" }
            ];
            const categoryKeywords = ["đầm", "áo", "quần"];

            // Check for product-specific redirect
            const matchedProduct = products.find(product =>
                product.name === query || product.sku.toLowerCase() === query
            );

            if (matchedProduct) {
                window.location.href = matchedProduct.page;
            }
            // Check for category-specific redirect
            else if (categoryKeywords.some(keyword => query.includes(keyword))) {
                window.location.href = "cartegory.html";
            }
            // Search for partial matches
            else {
                const matches = products
                    .filter(product => product.name.includes(query))
                    .map(product => product.name);
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
// Sanitize input to prevent XSS
function sanitizeInput(input) {
    // Use a regular expression to remove potentially dangerous tags like <script>
    return input.replace(/<script.*?>.*?<\/script>/gmi, '').replace(/[<>\/]/g, '');
}

function disablePageInteraction() {
    // Disable all clicks and scrolling on the page to freeze interaction
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
    alert("Potential XSS attack detected! Page is disabled for security. Please refresh the page.");
}

function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let sanitizedInput = sanitizeInput(input); // Sanitize input to remove XSS attempts
    let products = document.querySelectorAll(".cartegory-right-content-item h1");

    let found = false;
    let xssDetected = input !== sanitizedInput; // Detect XSS

    if (xssDetected) {
        // XSS attack detected: Warn user, hide all products, and disable the page
        products.forEach(product => {
            product.parentElement.style.display = "none"; // Hide all products
        });
        disablePageInteraction(); // Freeze page interaction
    } else {
        // Normal search logic
        products.forEach(product => {
            if (product.innerText.toLowerCase().includes(sanitizedInput)) {
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
}

// Run search on Enter key press
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});