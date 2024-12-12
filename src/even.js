import readlineSync from "readline-sync";

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const isEven = (num) => {
  return num % 2 === 0 ? true : false;
};

const evenGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    let question = getRandomInt(-100, 100);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question("Your answer: ");
    let numIsEven = isEven(question);

    if (userAnswer === "yes" && numIsEven) {
      console.log("Correct!");
      correctAnswers += 1;
    } else if (userAnswer === "no" && !numIsEven) {
      console.log("Correct!");
      correctAnswers += 1;
    } else if (numIsEven && userAnswer === "no") {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`
      );
      if (correctAnswers > 0) {
        correctAnswers -= 1;
      }
    } else if (!numIsEven && userAnswer === "yes") {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
      );
      if (correctAnswers > 0) {
        correctAnswers -= 1;
      }
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
