const { spawn } = require('child_process');
const { watch } = require('gulp');

const runCommand = cmdString => {
    return new Promise((resolve, reject) => {
        const a = cmdString.split(' ');
        console.log(`Running command: ${cmdString}`);
        const child = spawn(a.shift(), a.length > 0 ? [...a] : undefined, {
            cwd: 'build'
        });

        child.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`.trim());
        });

        child.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`.trim());
        });

        child.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
            if(code == 0){
                return resolve();
            } else {
                return reject();
            }
        });

        child.on('error', (err) => {
            console.error('Failed to start subprocess:', err.message);
            return reject();
        });
    });
}

const sleep = t => {
    return new Promise(resolve => {
        setTimeout(resolve, t);
    });
}

const buildAndRun = async () => {
    try {
        await runCommand('cmake --build .');
        await sleep(100);
        await runCommand('./local_tests');
        
    } catch (e) {
        console.error(e);
    }
}

// Watch task that monitors files and runs the associated tasks
exports.watchFiles = () => {
    watch(['tests/*', './src/*.cpp', './include/*.h'], buildAndRun);
};

// Optional default task to run the watch task immediately from the command line
exports.default = exports.watchFiles;