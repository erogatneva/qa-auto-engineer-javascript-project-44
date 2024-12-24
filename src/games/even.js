import readlineSync from 'readline-sync';
import { getRandomInt, processAnswer } from '../index.js';

const isEven = (num) => num % 2 === 0;
const evenGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const question = getRandomInt(-100, 100);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = isEven(question) ? 'yes' : 'no';

    correctAnswers = processAnswer(
      expectedAnswer,
      userAnswer,
      correctAnswers,
      name,
    );
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default evenGame;
