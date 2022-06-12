import fs from 'fs';

function listFilesInFolder(userPath) {
    fs.readdir(userPath, (err, files) => {
        if (err) console.log('Invalid input')
        else {
            console.log(files);
        }
    })
};

export { listFilesInFolder }
