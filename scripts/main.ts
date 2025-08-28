// Example TypeScript code
const greet = (name: string): string => {
  return `Hello, ${name}! Welcome to Typed Adventures.`;
};

console.log(greet("Her Fando"));

// Example: DOM manipulation
const heroHeader = document.querySelector(".hero h1") as HTMLElement;
heroHeader.style.color = "darkblue";
