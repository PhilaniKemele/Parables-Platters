function openOrderModal() {
    var modal = document.getElementById('order-modal');
    modal.style.display = 'block';
}

function closeOrderModal() {
    var modal = document.getElementById('order-modal');
    modal.style.display = 'none';
}

var orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.querySelector('input[name="full-name"]').value;
    var paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    var company = document.querySelector('select[name="company"]').value;
    var quantity = document.querySelector('input[name="quantity"]').value;
    var requests = document.querySelector('input[name="requests"]').value;
    var time = document.querySelector('select[name="times"]').value;

    var orderNumber = Date.now(); // Generate a unique order number

    var wittyMessage = `Thank you, ${name}! Your order has been placed with the following details:
    Payment Method: ${paymentMethod}
    Company: ${company}
    Quantity: ${quantity}
    Requests/Customization: ${requests}
    Delivery Time: ${time}
    Order Number: ${orderNumber}

    Your order has been sent to Parables & Platters. Please save and keep your order number. You can also copy the order number or take a screenshot for your reference.`;

    var professionalMessage = `Dear ${name},

    Your order with Parables & Platters has been successfully placed. Here are the order details:
    - Payment Method: ${paymentMethod}
    - Company: ${company}
    - Quantity: ${quantity}
    - Requests/Customization: ${requests}
    - Delivery Time: ${time}
    - Order Number: ${orderNumber}

    Your order has been received and will be processed shortly. Please save and keep your order number for reference. You can also copy the order number or take a screenshot. Thank you for choosing Parables & Platters.`;

    // Display a customized alert message
    if (paymentMethod === 'card') {
        alert(wittyMessage); // Display the witty message for card payment
    } else {
        alert(professionalMessage); // Display the professional message for cash payment
    }

    closeOrderModal();

    // Send the form data to Formspree endpoint
    var formData = new FormData(orderForm);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/f/xpzgnpzz');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission failed');
            }
        }
    };
    xhr.send(formData);
});

// Delivery times with 1-hour intervals
var timesSelect = document.querySelector('select[name="times"]');
for (var i = 0; i < 24; i++) {
    var hour = i < 10 ? '0' + i : i;
    var time = `${hour}:00`;
    var option = document.createElement('option');
    option.value = time;
    option.textContent = time;
    timesSelect.appendChild(option);
}

var menuCards = document.querySelectorAll('.menu-card');

menuCards.forEach(function(card, index) {
    card.addEventListener('click', function() {
        openOrderModal();
    });
});
