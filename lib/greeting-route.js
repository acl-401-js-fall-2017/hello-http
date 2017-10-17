function greet(name = 'stranger', greeting = 'hello') {
    return `${ greeting } ${ name }`;
}

module.exports = greet;
