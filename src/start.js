import * as readline from 'node:readline';
import { stdin as input, stdout as output, argv } from 'process';

// import custom modules
import * as directory from './directory.js';
import * as read from './read.js';
import * as create from './create.js';

const rl = readline.createInterface({ input, output });
const username = argv[2].slice(11);

rl.write(`Welcome to the File Manager, ${username}!` + '\n' + '\n');

async function main() {
  let currentDirectory = directory.userHomeDirectory();

  rl.write(`You are currently in ${currentDirectory}` + '\n');

  for await (const userInput of rl) {

    if (userInput === 'up') {
      let goUp = directory.moveDirectoryUp(currentDirectory);
      currentDirectory = goUp;
      rl.write(`You are currently in ${goUp}` + '\n');
    };

    if (userInput.startsWith('cd')) {
      let pathTo = userInput.slice(3);

      let winEndLine = '\/';
      let posixEndLine = '/';

      if (pathTo.endsWith(posixEndLine) && currentDirectory.includes(posixEndLine)) currentDirectory = pathTo;
      else currentDirectory = posixEndLine + pathTo;

      if (pathTo.endsWith(winEndLine) && currentDirectory.includes(winEndLine)) currentDirectory = pathTo;
      else currentDirectory = winEndLine + pathTo;

      if (!pathTo.includes(posixEndLine) && !pathTo.includes(posixEndLine)) currentDirectory.concat(pathTo);
      if (!pathTo.includes(winEndLine) && !pathTo.includes(winEndLine)) currentDirectory.concat(pathTo);

      rl.write(`You are currently in ${currentDirectory}` + '\n');
    };

    if (userInput === 'ls') {
      read.listFilesInFolder(currentDirectory);
    };

    if (userInput.startsWith('add')) {
      let fileToCreate = userInput.slice(3) + '.txt';
      create.createFile(currentDirectory, fileToCreate);
    }

    if (userInput === '.exit') rl.close()

  }
};

main();
