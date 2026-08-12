const quoteForm = document.getElementById("quote-form");

quoteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const quantity = document.getElementById("quantity").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        `Hello Devise Prints!%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Service: ${service}%0A` +
        `Quantity: ${quantity}%0A` +
        `Details: ${message}`;

    const whatsappNumber = "254701190310";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

});