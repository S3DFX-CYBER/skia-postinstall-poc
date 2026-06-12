const fs = require('fs');
const os = require('os');

console.log('=== POSTINSTALL EXECUTED ===');

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