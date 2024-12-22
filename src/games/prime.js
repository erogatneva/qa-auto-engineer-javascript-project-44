import readlineSync from "readline-sync";
import { getRandomInt, processAnswer } from "../index.js";

const primes = (range = 100) => {
  let nums = [];

  for (let i = 2; i < range; i++) {
    // выписываем все числа от 2 до n
    nums.push(i);
  }

  for (let j = 0; j < nums.length; j++) {
    // вычёркиваем все числа, которые не являются простыми
    for (let k = 0; k < nums.length; k++) {
      if (nums[k] % nums[j] === 0 && nums[k] !== nums[j]) {
        nums.splice(k, 1);
      }
    }
  }

  return nums;
};

const isPrime = (primeNums, num) => {
  return primeNums.includes(num);
};

const generateQuestion = () => {
  let num = getRandomInt();
  let question = `Question: ${num}`;
  return { question, num };
};

const primeGame = (name) => {
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    console.log(
      `Answer "yes" if given number is prime. Otherwise answer "no".`
    );
    const question = generateQuestion();
    const primeNums = primes();
    console.log(question.question);
    let userAnswer = readlineSync.question("Your answer: ");
    let expectedAnswer = isPrime(primeNums, question.num) ? "yes" : "no";

    correctAnswers = processAnswer(
      expectedAnswer,
      userAnswer,
      correctAnswers,
      name
    );
  }

  correctAnswers === 3 ? console.log(`Congratulations, ${name}!`) : "";
};

export default primeGame;
