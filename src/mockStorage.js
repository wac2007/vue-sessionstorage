// ------------------------------------------------------
// MockStorage
// ------------------------------------------------------
function mockStorage() {
  this.data = {};
  this.setItem = function (key, value) {
    this.data[key] = value;
  };
  
  this.getItem = function (key) {
    return this.data[key];
  };
};

module.exports = mockStorage;