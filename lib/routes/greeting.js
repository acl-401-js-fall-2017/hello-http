'use strict';

module.exports = function(res, path, query) {
    console.log(path);
    let response = `Howdy ${path.split('/')[2]}`;
    res.end(response);
};