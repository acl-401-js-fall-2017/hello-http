const facts = [
    'http typically uses port 80',
    'https is a more secure version of http',
    'https uses port 443'
];

const factPicker = () => {
    return Math.floor(Math.random() * facts.length);
};

module.exports = function factEnabler () {
    return facts[factPicker()];
};
