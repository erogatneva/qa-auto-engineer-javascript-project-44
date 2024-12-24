import { processAnswer, getRandomInt } from "../index.js";
import readlineSync from "readline-sync";

const generateProgression = (progressionLength = 10) => {
  const firstTerm = getRandomInt(0, 10);
  const step = getRandomInt(1, 10);
  let progression = ``;
  let nextTerm = firstTerm;
  const hideTermIndex = getRandomInt(0, progressionLength - 1);
  let expectedAnswer;

  for (let i = 0; i < progressionLength; i++) {
    if (i === hideTermIndex) {
      progression += ".. ";
      expectedAnswer = nextTerm;
    } else {
      progression += `${nextTerm} `;
    }
    nextTerm += step;
  }

  return { progression, expectedAnswer };
};

const generateQuestion = () => {
  const progression = generateProgression(getRandomInt(3, 20)); // в прогрессии должно быть минимум 3 элемента, чтобы игрок мог понять шаг прогрессии
  const question = `Question: ${progression.progression}`;
  const expectedAnswer = progression.expectedAnswer;

  return { question, expectedAnswer };
};

const progressionGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    console.log(`What number is missing in the progression?`);
    let question = generateQuestion();
    console.log(question.question);
    let userAnswer = readlineSync.question("Your answer: ");
    let expectedAnswer = question.expectedAnswer;

    correctAnswers = processAnswer(
      expectedAnswer,
      userAnswer,
      correctAnswers,
      name
    );
  }

  correctAnswers === 3 ? console.log(`Congratulations, ${name}!`) : "";
};

export default progressionGame;
