// const marcin = { age: 26, name: "Marcin", city: "Poznań" };

// const displayInfo = (person) => {
//   //   const age = person.age;
//   //   const name = person.name;
//   //   const city = person.city;

//   const { age, name, city } = person;
// };

const displayInfo = ({ age, name, city = "Warszawa" }) => {
  //   const age = person.age;
  //   const name = person.name;
  //   const city = person.city;
  // const {age, name, city} = person;
};

displayInfo(marcin);

const marcin = ["Marcin", 26, "Poznań"];

const getPersonInfo = ([name, , city]) => {
  //   const name = person[0];
  //   const age = person[1];
  //   const city = person[2];
  //   return `Imię ${person[0]}, wiek: ${person[1]}, miasto ${person[2]}`;

  //   const [name, age, city] = person;

  return `Imię ${name}, wiek: ${age}, miasto ${city}`;
};

console.log(getPersonInfo(marcin));

const letters = ["a", "b", "c", "d", "f", "g", "h"];

const [firstLetter, secondLetter, ...otherLetters] = letters;
