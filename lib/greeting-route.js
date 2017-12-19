function greet(name, salutation) {
    name = name || 'stranger';
    salutation = salutation || 'hello';
    return [salutation, name].join(' ');
}

module.exports = greet;
