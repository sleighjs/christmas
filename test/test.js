var Kernel = require('sleigh');
var assert = require('assert');

describe('Server', function() {
    describe('#serve', function() {
        it('should start server without error', function() {
            var sleigh = new Kernel;
            sleigh.serve();
        });
    });

    describe('#static-path', function() {
        it('should have "public" directory as static path', function() {
            if (app.get('static-path') != '/public') {
                fail();
            }
        });
    });

    describe('#router', function() {
        it('should have set up router properly', function() {
            console.log(app.path());
        });
    });

    describe('#config', function() {
        it('should have set config file properly', function() {
            assert.ok(config.get('server.port') === 8888);
        });
    });
});