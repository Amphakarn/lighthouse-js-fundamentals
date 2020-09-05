function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Amphakarn", 1977, 2020));
console.log(ageCalculator("Suchinda", 1953, 2020));