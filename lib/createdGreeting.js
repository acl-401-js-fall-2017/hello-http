

module.exports = function createdGreeting(name, salutation) {
    
    salutation = salutation || 'hello';

    if(!name) {
        name = 'stranger!';
    }

    return [salutation, name].join(' ');
};