/**
 * Created by yuval_000 on 11/19/2015.
 */
var router = require('./lib/router');
var config = require('./config.json');

var DbAccess = require('./lib/dbAccess');
var dbAccess = new DbAccess();

var restify = require('restify');

var server = restify.createServer({
    name: 'uberfund'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.bodyParser({ mapParams: false }));

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);

    dbAccess.connect(config.mongodbServerUrl, config.dbName).then(function(){
        router.route(dbAccess, server);
    });
});

