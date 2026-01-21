interface Person {
  firstName?: string;
  lastName?: string;
  age?: number | null;
}

const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

function sortPersons(persons: Person[]): Person[] {
  const filtered = persons.filter(person => 
      person.firstName?.trim() !== '' &&
      person.lastName?.trim() !== '' &&
      person.age !== null && 
      typeof person.age === 'number' && 
      person.age >= 0 && 
      person.age <= 100
  );

  const sorted = filtered.sort((a, b) => {

      if (a.age !== undefined && b.age !== undefined && a.age!==null && b.age !==null) {
          return a.age - b.age; 
      }

      if (a.firstName! < b.firstName!) {
          return -1;
      }
      if (a.firstName! > b.firstName!) {
          return 1;
      }

      if (a.lastName! < b.lastName!) {
          return -1; 
      }
      if (a.lastName! > b.lastName!) {
          return 1; 
      }

      return 0; 
  });

  return sorted;
}

const result = sortPersons(persons);
console.log(result);
