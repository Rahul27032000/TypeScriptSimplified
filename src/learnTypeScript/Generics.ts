// Generics --> reuse the code

// // 1 EG
// function logString(arg: string) {
//   console.log(arg);
//   return arg;
// }

// logString("logged in");

// function logNumber(arg: number) {
//   console.log(arg);
//   return arg;
// }

// logNumber(1);

// function logArray(arg: any[]) {
//   console.log(arg);
//   return arg;
// }

// logArray([4, 3, 2, 1, 2, 4, 5]);

// function logAnything<T>(arg: T): T {
//   console.log(arg);
// }

// logAnything("something");
// logAnything(1);
// logAnything(true);
// logAnything([1, 2, 3, 4, 5, "something"]);

// another function

interface HasAge {
  age: number;
}

// // normal function
// function getOldes(people: HasAge[]): HasAge {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// using generic
function getOldest<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [
  { age: 1 },
  { age: 2 },
  { age: 3 },
  { age: 4 },
  { age: 5 },
  { age: 6 },
];

interface Player {
  name: string;
  age: number;
}
const players: Player[] = [
  { name: "John", age: 1 },
  { name: "sga", age: 2 },
  { name: "sdsd", age: 3 },
];

console.log(getOldest(people).age);

getOldest(people);

// assertion {forced}
// const person= getOldest(players) as Player;
// person.name

// const person = getOldest(players);
// person.name;
const person = getOldest(people);

// third example (real world example)

interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://localhost/${path}`);
  return response.json();
};

const fetchUserData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`http://localhost/${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchPostData("posts");
  posts[0].title;

  const users = await fetchUserData("users");
  users[0].name;
})();

// Generic function

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://localhost/${path}`);
  return response.json();
};

(async () => {
  const users = await fetchData<IUser[]>("users");
  const posts = await fetchData<IPost[]>("posts");
  users[0].name;
  posts[1].title;
})();
