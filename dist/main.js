"use strict";
// Greeting console
const greet = (name) => `Hello, ${name}! Welcome to Typed Adventures.`;
console.log(greet("Her Fando"));
// Footer appear on scroll
window.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    if (window.scrollY + window.innerHeight > document.body.scrollHeight - 100) {
        footer.classList.add("show");
    }
});
// Button interaction for feature cards
document.querySelectorAll(".card-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Feature clicked! Keep learning!");
    });
});
// Contact form validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }
    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
});
//# sourceMappingURL=main.js.map