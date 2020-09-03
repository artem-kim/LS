function greetings(name, obj) {
  let fullName = name.join(' ');
  return `Hello, ${fullName}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
