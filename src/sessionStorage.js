// ------------------------------------------------------
// SessionStorage
// ------------------------------------------------------
function sessionStorage() {
  this.key = null;

  this.__getRandomString = function (len = 10) {
    let str = '';
    while (len--) {
      str += String.fromCharCode(48 + ~~(Math.random() * 42));
    }
    return str;
  };

  this.__getKey= function () {
    let _key = window.sessionStorage.getItem('sessionKey');
    if (!_key) {
      _key = this.__getRandomString();
      window.sessionStorage.setItem('sessionKey', _key);
    }
    this.key = _key;
  }
  // Get all from sessionStorage
  this.__get = function () {
    if (!this.key) {
      this.__getKey();
    }
    let val = JSON.parse(window.sessionStorage.getItem(this.key));
    return val || {};
  };

  this.get = function (key) {
    let val = this.__get();
    return val[key];
  };

  // Set all on sessionStorage
  this.__set = function (val) {
    if (!this.key) {
      this.__getKey();
    }
    window.sessionStorage.setItem(this.key, JSON.stringify(val));
  };

  this.set = function (key, value) {
    let val = this.__get();
    val[key] = value;
    this.__set(val);
  };

  this.exists = function (key) {
    let val = this.__get();
    return key in val;
  };

  this.remove = function (key) {
    let val = this.__get();
    delete val[key];

    this.__set(val);
  };

  this.clear = function () {
    this.__set({});
  };
}

module.exports = sessionStorage;