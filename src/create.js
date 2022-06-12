import fs from 'fs';

function createFile(dir, name) {
    fs.createWriteStream(dir + '/' + name);
    console.log(`File ${name} was successfully added`);
}

export { createFile};
