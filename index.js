import sessionStorage from './src/sessionStorage';
import mockStorage from './src/mockStorage';

// ------------------------------------------------------
// Init
// ------------------------------------------------------

if (!window.sessionStorage) {
    window.sessionStorage = mockStorage;
}

const STORAGE = {
  install (Vue, options) {
    Vue.prototype.$session = new sessionStorage()
  }
}

module.exports = STORAGE
