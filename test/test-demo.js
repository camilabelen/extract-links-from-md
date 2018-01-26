const chai = require('chai');
const getMdLinks = require('../src/get-links.js');
const str = '# Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te mpor incididunt ut [labore](en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna al iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](www.foo.com) Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin t occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

describe('Validar funcion que captura estructura de link de Markdown', function() {
  it.skip('Debe comprobar si existe patron []() y lo descarta', () => {
    chai.assert.equal(getMdLinks.MdLink('Lorem []() foo []()'), []);
  });
  it('Debe comprobar si existe patron [text](www.link.com)', () => {
    chai.assert.equal(getMdLinks.MdLink('[text](www.link.com)'), '[text](www.link.com)');
  });  
});

describe('Validar funcion que verifica si el texto es un enlace válido', function () {
  it('Debe comprobar si es una url valida', () => {
    chai.assert.equal(getMdLinks.url('http://foo.com'), 'http://foo.com');
  });
  it('Debe comprobar si es una url valida', () => {
    chai.assert.equal(getMdLinks.url(str), 'en.wiktionary.org/wiki/labore,https://en.wiktionary.org/wiki/dolore,www.foo.com');
  });
});

describe('Validar función que devuelve el texto de un', function () {
  it('Debe comprobar si retorna string correcto', () => {
    chai.assert.equal(getMdLinks.text('[text](www.link.com)'), 'text');
  });
  it('Debe retornar "No results" si no encuentra texto', () => {
    chai.assert.equal(getMdLinks.text('[](www.link.com)'), 'No results');
  });
});

describe('Validar', function () {
  it('Debe comprobar si retorna un arreglo de objetos', () => {
    chai.assert.equal(getMdLinks.matches(), '{ href: www.link.com, text: text }');
  });
  it.skip('');
});
