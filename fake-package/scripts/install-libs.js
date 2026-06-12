const fs = require('fs');
const os = require('os');

console.log('================================');
console.log('POSTINSTALL EXECUTED');
console.log('================================');
console.log('Hostname:', os.hostname());
console.log('User:', os.userInfo().username);
console.log('Platform:', os.platform());

fs.writeFileSync(
  '/tmp/postinstall-proof.txt',
  JSON.stringify({
    executed: true,
    hostname: os.hostname(),
    user: os.userInfo().username,
    platform: os.platform(),
    timestamp: new Date().toISOString()
  }, null, 2)
);

console.log('Proof file written');