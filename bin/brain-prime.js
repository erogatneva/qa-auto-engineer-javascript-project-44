#!/usr/bin/env node

import getUserName from '../src/cli.js';
import primeGame from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');

primeGame(getUserName());
