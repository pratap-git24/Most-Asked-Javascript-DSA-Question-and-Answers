
let people = [
    {name: 'Rachel', age: 24},
    {name: 'David', age: 16},
    {name: 'Aakash', age: 23},
    {name: 'Franklin', age: 26},
    {name: 'Ricky', age: 17}
];

let sorted_people = people.sort((a,b)=> a.age-b.age);
console.log(sorted_people);