import http from 'http';

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

app.listen("5000", "127.0.0.1", () => {
    console.log("server started");
})