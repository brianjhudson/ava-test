const exec = require('child_process').exec;

exec('ava --tap', (err, stdOut, stdErr) => {
    var results = stdOut.slice(stdOut.indexOf('# tests')).split('\n');
    var testCount = results[0].split(' ').splice(-1).join();
    var passCount = results[1].split(' ').splice(-1).join();
    var failCount = results[2].split(' ').splice(-1).join();

    console.log("Test Count: ", testCount);
    console.log("Pass Count: ", passCount);
    console.log("Fail Count: ", failCount);

    exec('ava --verbose', (err, stdOut, stdErr) => {
        console.log(stdErr)
    })
})