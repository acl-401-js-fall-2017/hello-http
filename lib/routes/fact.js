'use strict';

const facts = [
    { fact: 'HTTP stands for Hyper Text Transfer Protocol; it could also stand for Head To This Page'},
    { fact: 'HTTP is built on TCP'},
    { fact: 'HTTP does stuff'}
];

module.exports = function(res) {
    res.end(JSON.stringify(facts[Math.floor(Math.random() * facts.length)]));
};