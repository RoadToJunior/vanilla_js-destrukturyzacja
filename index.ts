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

const getPersonInfo = (person) => {
  return `Imię ${person[0]}, wiek: ${person[1]}, miasto ${person[2]}`;
};

console.log(getPersonInfo(marcin));
