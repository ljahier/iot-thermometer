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
    res.render('index', {
        username: "Lucas"
    })
})

app.get('/post/:data', (req, res) => {
    fs.writeFile('message.txt', req.params.data, (err) => {
        fs.readFile('message.txt', (err, data) => {
            if (err) throw err;
            res.render('index', {
                data: data
            })
        })
        console.log('The file has been saved!');
    });
    res.end(req.params.data)
})

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
