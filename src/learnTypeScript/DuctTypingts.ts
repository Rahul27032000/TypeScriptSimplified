// // Structural typing or duct Typing
// interface ICreadential {
//   username: string;
//   password: string;
//   isAdmin?: boolean;
// }

// function login(credentials: ICreadential): boolean {
//   console.log(credentials);
//   return true;
// }

// const user = {
//   username: "user",
//   password: "password",
//   isAdmin: false,
// };

// login(user);
interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): boolean;
}

const auth: IAuth = {
  username: "user",
  password: "secret",
  login(username: string, password: string) {
    //
    console.log(username, password);
    return true;
  },
};

// inferance
let num = 1;
let str = "SDFA";
