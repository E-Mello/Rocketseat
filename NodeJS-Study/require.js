/*  *   Módulos Nativos   *  */
const path = require('path')

console.log(path.basename(__filename));

// console.log(require('path'));


/*  *   Meus Módulos   *  */

const myModule = require('./exports')

console.log(myModule);