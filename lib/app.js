const url = require('url');


module.exports = (req, res) => {
    const { pathname } = url.parse(req.url);
    let pathInformation = pathname.slice(1).split('/');
    let action = pathInformation[0];
    let name = 'stranger';

    if(pathInformation.length > 1){
        name = pathInformation[1];
    }



    
    // eslint-disable-next-line
    console.log('I AM PATHNAME!!!!!!!!!!!!!!', pathname);
    // eslint-disable-next-line
    console.log('I AM action!!!!!!!!!!!!!!', action);
    // eslint-disable-next-line
    console.log('I AM NAME!!!!!!!!!!!!!', name);
    

    if (action === 'greeting') {
        res.setHeader('Content-Type', 'text/html');
        let greeting = `<h1>Hello ${name}</h1>`;
        res.end(greeting);
    }

};