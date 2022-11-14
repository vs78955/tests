const client = {
  name: "Sam",
  age: 21,
};

const increaseAge = (x = { ...client }) => (x.age += 1);
const changeAgeAndName = (x = { ...client }) => {
  x.age += 1;
  x.name = "Jin";
};

increaseAge(client);
changeAgeAndName();

console.log(client); //?
