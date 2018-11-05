const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const ejs = require('ejs');

let app = express();
let port = process.env.PORT | 8080;

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {

})

app.get('/post/:data', (req, res) => {
    fs.writeFile('message.txt', req.params.data, (err) => {
        console.log('The file has been saved!');
    });
    res.end(req.params.data)
})

app.get('/post/:data', (req, res) => {
    fs.writeFile('message.txt', req.params.data, (err) => {
        console.log('The file has been saved!');
    });
    res.end(req.params.data)
})

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
