'use strict';

const facts = [
    'HTTP stands for Hyper Text Transfer Protocol; it could also stand for Head To This Page',
    'HTTP is built on TCP',
    'HTTP does stuff'
];

module.exports = function(res) {
    res.end(`HTTP fact: ${facts[Math.floor(Math.random() * facts.length)]}`);
};