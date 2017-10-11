'use strict';

module.exports = function(res, path, query) {

    const defaultSalutation = 'Howdy';
    const defaultName = 'Stranger';

    const name = path.split('/')[2];

    let response = `${query.salutation || defaultSalutation} ${name || defaultName}`;
    res.end(response);
};