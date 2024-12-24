#!/usr/bin/env node

import getUserName from '../src/cli.js';
import evenGame from '../src/games/even.js';

console.log('Welcome to the Brain Games!');

evenGame(getUserName());
