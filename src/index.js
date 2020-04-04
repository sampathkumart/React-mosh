const runs = [15, 19, 18, 52];

//adding

const index = runs.indexOf(18);
const add = [...runs.slice(0, index), 99, ...runs.slice(index)];
console.log(add);

// remove

const removed = runs.filter(r => r !== 52);
console.log(removed);

// update

const updated = runs.map(s => (s === 19 ? 88 : s));
console.log(updated);
