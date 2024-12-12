#!/usr/bin/env node

import { getUserName } from "/home/rina/qa-auto-engineer-javascript-project-44/src/cli.js";
import evenGame from "/home/rina/qa-auto-engineer-javascript-project-44/src/even.js";

console.log("Welcome to the Brain Games!");

evenGame(getUserName());