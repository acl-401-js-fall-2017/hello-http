'use strict';

module.exports = function(res, path, query) {
    
    const name = path.split('/')[2];
    const altName = 'Stranger';
    let response = `Howdy ${name ? name : altName}`;
    res.end(response);
};