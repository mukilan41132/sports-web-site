const fs = require('fs')

const express = require('express');
const path = require('path');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));


app.get('/',function(req,res){
    res.render('indexs');
});

app.get('/indexs',function(req, res) {
     res.render('indexs');
});

app.get('/contactus',function(req, res) {
   res.render('contactus');
});
app.post('/contactus', function(req,res){
    const contactus =req.body;
    const filePath = path.join(__dirname, 'data' ,'contactus.json');

    const fileData = fs.readFileSync(filePath);
    const storedContactus = JSON.parse(fileData);

    storedContactus.push(contactus);

    fs.writeFileSync(filePath,JSON.stringify(storedContactus));

    res.redirect('/');
})

app.get('/userlogin',function(req, res) {
   res.render(userlogin);
});
app.post('/userlogin', function(req,res){
    const userlogin =req.body;
    const filePath = path.join(__dirname, 'data' ,'userlogin.json');

    const fileData = fs.readFileSync(filePath);
    const storedUserlogin = JSON.parse(fileData);

    storedUserlogin.push(userlogin);

    fs.writeFileSync(filePath,JSON.stringify(storedUserlogin));

    res.redirect('/');
})

app.get('/regester',function(req, res) {
  res.render(regester);
});
app.post('/regester', function(req,res){
    const regester =req.body;
    const filePath = path.join(__dirname, 'data' ,'regester.json');

    const fileData = fs.readFileSync(filePath);
    const storedRegester = JSON.parse(fileData);

    storedRegester.push(regester);

    fs.writeFileSync(filePath,JSON.stringify(storedRegester));

    res.redirect('/');
})


app.get('/about',function(req, res) {
   res.render('about');
});

app.get('/i',function(req, res) {
    res.render('i');
});

app.get('/ind',function(req, res) {
  res.render('ind');
});

app.get('/indoor',function(req, res) {
 res.render('indoor');
});


app.listen(3000);
