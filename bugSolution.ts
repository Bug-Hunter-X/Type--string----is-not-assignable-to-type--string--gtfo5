function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Jane User", "John User"];
console.log(greeter(user)); // This will now work correctly
console.log(greeter("Jane User")); // This will also work correctly