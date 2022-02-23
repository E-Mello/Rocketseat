const getFlagValue = require('./flags');

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`);

/**
 * 
 * 
 node file02.js --name "Mayk Brito" --greeting "Tudo bem com você?"

 */