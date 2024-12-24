import readlineSync from 'readline-sync';
import { processAnswer, getRandomInt } from '../index.js';

const generateProgression = (progressionLength = 10) => {
  const firstTerm = getRandomInt(0, 10);
  const step = getRandomInt(1, 10);
  let progression = '';
  let nextTerm = firstTerm;
  const hideTermIndex = getRandomInt(0, progressionLength - 1);
  let expectedAnswer;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hideTermIndex) {
      progression += '.. ';
      expectedAnswer = nextTerm;
    } else {
      progression += `${nextTerm} `;
    }
    nextTerm += step;
  }

  return { progression, expectedAnswer };
};

const generateQuestion = () => {
  // в прогрессии должно быть минимум 3 элемента, чтобы игрок мог понять шаг прогрессии
  const progression = generateProgression(getRandomInt(5, 20));
  const question = `Question: ${progression.progression}`;
  const { expectedAnswer } = progression;

  return { question, expectedAnswer };
};

const progressionGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    console.log('What number is missing in the progression?');
    const question = generateQuestion();
    console.log(question.question);
    const userAnswer = readlineSync.question('Your answer: ');
    const { expectedAnswer } = question;

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

export default progressionGame;
