var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Ingresa un texto en formato Markdown: ', inputText )

function inputText (text) {
  var geturls = require('./index.js');
  //console.log(text)
  console.log(geturls.matches(text))
  }


/* EXAMPLE (Copy)
# Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te mpor incididunt ut [labore](en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna al iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](www.foo.com) Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin t occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
*/


