var route = require('sleigh/lib/router');

var User = require('../models/user');

exports = module.exports.routes = function() {
    route.get('/', 'WelcomeController@index');
    route.get('/users', function(req, res){
        var users = User.all();
        res.render('users', {users:users})
    });
}
