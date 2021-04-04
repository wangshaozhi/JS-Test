function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");

//这样直接用的话，是会报错的
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//这样是 Lydia Hallie
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
console.log(Person.getFullName()); // undefined undefined
console.log(member.getFullName()); // Lydia Hallie
