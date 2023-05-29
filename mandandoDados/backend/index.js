const express = require('express')
const cors = require('cors')
const app = express()

var users = []

app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.post('/check-user', (req, res) => {    
    let username = req.body.username    
    if(users.some(item => item['username'] == username) === true) {
        res.status(200).json({userExists: true})
    } else {
        res.status(200).json({userExists: false})
    }
})

app.post('/register-user', (req, res) => {
    let user = {
        username: req.body.username, 
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        uf: req.body.uf
    }
    users.push(user)
    res.status(200).json({usersList:users})
})

app.post('/login', (req, res) => {
    const user = users.find(obj=>obj.email == req.body.email)
    console.log(users.map(obj=>obj.email))
    console.log("User: ", user.password)
    console.log(req.body)
    if (!user){
        res.status(200).json({user:false})
    }
    if (user.password == req.body.password){
        res.status(200).json({user:user})
    } else{
        res.status(200).json({user:false})
    }
})

app.get('/login-page', (req,res) => {
    window.location.href = "http://127.0.0.1:5500/mandandoDados/frontend/after-login.html";
    res.status(200)
})
app.listen(3125, ()=>console.log("Listening"))