require('module-alias/register');

function greet(name: string) {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript"));
