function createUserName(fullName) {
  return `@${fullName.trim().toLowerCase().split(" ").join("")}_${fullName.length}`;
}
console.log(createUserName("Thakor Chetan Dhanaji"));

