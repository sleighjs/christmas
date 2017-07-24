var Kernel = require('../src/kernel');

describe('Server', function() {
  describe('#serve()', function() {
    it('should start server without error', function() {
      var sleigh = new Kernel;
      sleigh.serve();
    });
  });
});