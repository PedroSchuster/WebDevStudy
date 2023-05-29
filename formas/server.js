/*
* @Author: ismaelseidel
* @Date:   2022-10-31 14:02:24
* @Last Modified by:   ismaelseidel
* @Last Modified time: 2022-10-31 14:10:51
*/

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3212

app.use(express.static('public'));


app.get("/registerUserGet", (req, res) => {
    const query = req.query
    const user = query.user
    const email = query.mail
    res.send(`Usuário ${user} cadastrado com sucesso via get. Email: ${email}.`)
})

app.use(bodyParser.urlencoded({extended: false}))
app.post("/registerUserPost", (req, res) => {
    const body = req.body
    const user = body.user
    const email = body.mail
    res.send(`Usuário ${user} cadastrado com sucesso via post. Email: ${email}.`)
})

app.use(bodyParser.json())
app.post("/registerUserPostAndJson", (req, res) => {
    const body = req.body
    const user = body.user
    const email = body.mail
    res.send(`Usuário ${user} cadastrado com sucesso via post + json. Email: ${email}.`)
})


app.get("/registerUserGetAndRoute/:user/:mail", (req, res) => {
    const routeParams = req.params
    const user = routeParams.user
    const email = routeParams.mail
    res.send(`Usuário ${user} cadastrado com sucesso via get + route params. Email: ${email}.`)
})


app.listen(port)
console.log('Server started at http://localhost:' + port)