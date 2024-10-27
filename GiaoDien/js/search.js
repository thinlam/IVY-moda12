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

function searchProduct() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    console.log('Search input:', input);

    var products = document.getElementsByClassName('cartegory-right-content-item');
    var found = false;

    for (var i = 0; i < products.length; i++) {
        var productNameElement = products[i].getElementsByTagName('h1')[0];
        if (productNameElement) {
            var txtValue = productNameElement.textContent || productNameElement.innerText;
            console.log('Product name:', txtValue);

            if (txtValue.toLowerCase().indexOf(input) > -1) {
                products[i].style.display = "";
                found = true;
            } else {
                products[i].style.display = "none";
            }
        }
    }

    if (!found) {
        console.log('No products found');
        document.getElementById('noResultsMessage').style.display = "block";
    } else {
        console.log('Products found');
        document.getElementById('noResultsMessage').style.display = "none";
    }
}