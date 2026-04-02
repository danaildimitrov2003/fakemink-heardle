const fs = require('fs');

const songsContent = fs.readFileSync('./src/constants/songs.ts', 'utf8');

const updatedContent = songsContent.replace(/"Unknown Artist"/g, '"fakemink:"');

const updatedContent2 = updatedContent.replace(/"Fakemink"/g, '"fakemink:"');

const updatedContent3 = updatedContent2.replace(/"FakeMink"/g, '"fakemink:"');

fs.writeFileSync('./src/constants/songs.ts', updatedContent3);

console.log('✅ All Unknown Artist entries replaced with fakemink:');
console.log('   - Unknown Artist → fakemink:');
console.log('   - Fakemink → fakemink:');
console.log('   - FakeMink → fakemink:');
