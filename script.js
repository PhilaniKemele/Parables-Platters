document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-card');
    const formOverlay = document.querySelector('.form-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const selectedItemInput = document.getElementById('selectedItem');
    const itemPriceInput = document.getElementById('itemPrice');
    const submitBtn = document.getElementById('submitBtn');

    // Function to show the form overlay
    function showFormOverlay() {
        formOverlay.style.display = 'block';
    }

    // Function to hide the form overlay
    function hideFormOverlay() {
        formOverlay.style.display = 'none';
    }

    // Function to handle when a menu item is clicked
    function handleMenuItemClick(item) {
        const menuItem = item.currentTarget;
        const selectedItem = menuItem.getAttribute('data-menu-item');
        const itemPrice = menuItem.querySelector('.price').innerText;

        // Set the selected item and price in the hidden form fields
        selectedItemInput.value = selectedItem;
        itemPriceInput.value = itemPrice;

        // Show the form overlay
        showFormOverlay();
    }

    // Event listeners for menu items
    menuItems.forEach(function (item) {
        item.addEventListener('click', handleMenuItemClick);
    });

    // Event listener for close button in form overlay
    closeBtn.addEventListener('click', hideFormOverlay);

    // Event listener for submit button in form
    submitBtn.addEventListener('click', function () {
        // You can add any additional form validation or processing here if needed
        document.getElementById('orderForm').submit();
    });
});
