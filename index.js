const { execSync } = require('child_process');

const stdout = execSync(
    `npm run my_test && echo ${process.env.npm_config_sha}`
);

console.log('SHA: ', process.env.npm_config_sha);
console.log('stdout', Buffer.from(stdout).toString());
