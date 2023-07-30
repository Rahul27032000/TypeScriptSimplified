"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getOldest(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [
    { age: 1 },
    { age: 2 },
    { age: 3 },
    { age: 4 },
    { age: 5 },
    { age: 6 },
];
const players = [
    { name: "John", age: 1 },
    { name: "sga", age: 2 },
    { name: "sdsd", age: 3 },
];
console.log(getOldest(people).age);
getOldest(people);
const person = getOldest(people);
const fetchPostData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://localhost/${path}`);
    return response.json();
});
const fetchUserData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://localhost/${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield fetchPostData("posts");
    posts[0].title;
    const users = yield fetchUserData("users");
    users[0].name;
}))();
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://localhost/${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield fetchData("users");
    const posts = yield fetchData("posts");
    users[0].name;
    posts[1].title;
}))();
//# sourceMappingURL=Generics.js.map