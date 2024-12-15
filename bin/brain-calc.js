#!/usr/bin/env node

import { getUserName } from "../src/cli.js";
import calcGame from "../src/calc.js";

console.log("Welcome to the Brain Games!");

calcGame(getUserName());