require('child_process').exec('whoami', function(error, stdout, stderr) {
    console.log('you are: ' + stdout);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
