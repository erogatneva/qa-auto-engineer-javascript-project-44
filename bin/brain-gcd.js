#!/usr/bin/env node

import { getUserName } from "../src/cli.js";
import gcdGame from "../src/games/gcd.js";

console.log("Welcome to the Brain Games!");

gcdGame(getUserName());