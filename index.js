const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const ejs = require('ejs');

let app = express();
let port = process.env.PORT | 8080;

app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    fs.readFile('message.txt', (err, data) => {
        if (err) throw err;
        res.render('index', {
            data: data
        })
    })
})

app.get('/post', (req, res) => {
    fs.readFile('message.txt', (err, data) => {
        if (err) throw err;
        res.render('index', {
            data: data
        })
    })
})

app.get('/post/:data', (req, res) => {
    fs.writeFile('message.txt', req.params.data, (err) => {
        fs.readFile('message.txt', (err, data) => {
            if (err) throw err;
            res.redirect('http://sin.lucasjahier.fr/');
        })
        console.log('The file has been saved!');
    });
})

app.post('/post/:data', (req, res) => {
    fs.writeFile('message.txt', req.params.data, (err) => {
        fs.readFile('message.txt', (err, data) => {
            if (err) throw err;
            res.redirect('http://sin.lucasjahier.fr/');
        })
        console.log('The file has been saved!');
    });
})

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
