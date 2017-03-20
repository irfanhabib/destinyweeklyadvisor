var config = require('./config.json');
var Q = require('q');
var request = require('request');

function getRequestOptions(url){
    return {
        url: url,
        followRedirect: true,
        headers: {
            'X-API-Key': config['X-API-KEY']
        }
    };
}

module.exports.getRequestOptions = getRequestOptions;
module.exports.request = Q.denodeify(request);
