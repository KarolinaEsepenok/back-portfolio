
const express = require('express')
const nodemailer = require("nodemailer");
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const port = 5000


const smtp_login = 'karolinaesepenok@gmailcom'
//const smtp_login = process.env.SMTP_LOGIN
//const smtp_password = process.env.SMTP_PASSWORD
const smtp_receivers_email = process.env.SMTP_RECEIVERS_EMAIL

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: smtp_login, //test account
        pass: 'REDSlim1992Hi' // password from 2FA
    }
})

app.post('/', async function (req, res) {

    const {name, email, subject, message} = req.body
    const mailOptions = {
        from: name,
        to: smtp_receivers_email,
        subject: subject,
        html: `<h1>New message from HR!</h1>
<div>You have new message from <b>${email}</b>: ${message}</div>`// plain text body
    };

    await transporter.sendMail(mailOptions);
    res.send("Ok")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})