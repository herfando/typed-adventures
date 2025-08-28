"use strict";
// Greeting
const greet = (name) => {
    return `Hello, ${name}! Welcome to Typed Adventures.`;
};
console.log(greet("Her Fando"));
// Hero fade in handled by CSS, JS optional for scroll effects
window.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    if (window.scrollY + window.innerHeight > document.body.scrollHeight - 100) {
        footer.classList.add("show");
    }
});
//# sourceMappingURL=main.js.map