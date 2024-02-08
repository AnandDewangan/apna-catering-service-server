require('dotenv').config();
const express = require('express');
require('./db/config');
const Contact = require('./db/contact');
const User = require('./db/login');
const app = express();
const cors = require('cors');
const PORT = 5000; 

app.use(express.json());
app.use(cors());

app.post('/info', async(req, res) => {
    const data = new Contact(req.body);
    let result = await data.save();
    res.send(result);
});

app.get('/login', async(req, res) => {
    let data = await User.find();
    if(data){
        res.send(data);
    }else{
        res.send('data not found');
    }
});

app.get('/clients', async (req, res) => {
    let data = await Contact.find();
    res.send(data);
})

app.listen(PORT, ()=>console.log(PORT));