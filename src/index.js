// updating objects
const info = { name: "sachin" };
const muttate = Object.assign({}, info, { name: "Dhoni" }, { role: "batsman" });
console.log(muttate);

// speard operator

const bioData = { age: 45, role: "batsman" };
const update = { ...bioData, name: "virat" };
console.log(update);
