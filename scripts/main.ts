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
