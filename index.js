const { exec } = require('child_process');

// const stdout = exec(`npm run my_test && echo ${process.env.npm_config_sha}`);

// console.log('SHA: ', process.env.npm_config_sha);
// console.log('stdout', Buffer.from(stdout).toString());
// const stdout =
exec('npm config set test=567576 && npm run get', function (
    error,
    stdout,
    stderr
) {
    console.log('stdout', Buffer.from(stdout).toString());
});
