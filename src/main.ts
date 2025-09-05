import PersonRepository from "./PersonRepository";

const repo = new PersonRepository();
repo.loadPeople();

repo.getAll().forEach(person => {
    person.celebrateBirthday();
    console.log(person.greet());
    console.log(`Is adult: ${person.isAdult()}`);
});

repo.savePeople();