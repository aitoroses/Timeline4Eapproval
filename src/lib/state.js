import Tessel from 'tessel-js';

var atom = new Tessel();

Object.defineProperty(window, 'atom', {get: () => atom.get() })

Tessel.autorun(() => {
  console.log(atom.get().sections)
  console.log(atom.get().streams)
})

export default atom;
