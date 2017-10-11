

module.exports = function createdGreeting(name, salutation) {
    name = name || 'hello stranger!';
    this.salutation = salutation;

    return [salutation, name].join('');
};