import readlineSync from "readline-sync";

const getUserName = () => {
  let name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};

export { getUserName };
