// Greeting console
const greet = (name:string):string => `Hello, ${name}! Welcome to Typed Adventures.`;
console.log(greet("Her Fando"));

// Footer appear on scroll
window.addEventListener("scroll", () => {
  const footer = document.querySelector("footer") as HTMLElement;
  if(window.scrollY + window.innerHeight > document.body.scrollHeight - 100) {
    footer.classList.add("show");
  }
});

// Button interaction for feature cards
document.querySelectorAll(".card-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    alert("Feature clicked! Keep learning!");
  });
});

// Contact form validation
const contactForm = document.getElementById("contactForm") as HTMLFormElement;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const email = (document.getElementById("email") as HTMLInputElement).value.trim();
  const message = (document.getElementById("message") as HTMLTextAreaElement).value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  contactForm.reset();
});
