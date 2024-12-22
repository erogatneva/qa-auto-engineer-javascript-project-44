#!/usr/bin/env node

import { getUserName } from "../src/cli.js";
import progressionGame from "../src/games/progression.js";

console.log("Welcome to the Brain Games!");

progressionGame(getUserName());