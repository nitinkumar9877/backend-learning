const http = require("http");

// const server = http.createServer((req, res) => {=
const server = http.createServer((req, res) => {

    // res.end("server created");

    if (req.url === '/')
        res.end("Home page");

    else if (req.url === '/contact')
        res.end("Contact page");

    else if (req.url === '/about')
        res.end("about page");

    else
        res.end("not found")

});

server.listen(3000, () => {
    console.log("Hello server listen");
})