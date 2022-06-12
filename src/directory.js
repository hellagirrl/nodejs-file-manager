import * as os from 'os';
import * as path from 'path';

function userHomeDirectory() {
    return os.homedir();
}

function moveDirectoryUp(userPath) {
    return path.dirname(userPath);
}

// function changeDirectory() {

// }

export { userHomeDirectory, moveDirectoryUp };
