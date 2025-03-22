// Global array of tutorials with inconsistent casing
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to capitalize the first letter of each word in a string
function titleCase(str) {
  return str
    .split(" ") // Split sentence into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Rejoin words into a sentence
}

// Function to convert all tutorial titles to title case
function titleCased() {
  return tutorials.map(titleCase);
}

// Example usage
console.log(titleCased());
