import readlineSync from "readline-sync";

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const isEven = (num) => {
  return num % 2 === 0 ? true : false;
};

const printCorrect = () => {
  console.log('Correct!');
};

const printError = (expectedAnswer, userAnswer, name) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`
  );
};

const processAnswer = (question, userAnswer, name, correctAnswers) => {
  const numIsEven = isEven(question);
  const correctAnswer = numIsEven ? 'yes' : 'no';

  if ((userAnswer === 'yes') === numIsEven) {
    printCorrect();
    return correctAnswers + 1;
  } else {
    printError(correctAnswer, userAnswer, name);
    return correctAnswers > 0 ? correctAnswers - 1 : 0;
  }
};

const evenGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    let question = getRandomInt(-100, 100);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question("Your answer: ");
    
    correctAnswers = processAnswer(question, userAnswer, name, correctAnswers);
  }

  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
