
const express = require('express')
const nodemailer = require("nodemailer");
const app = express()
const port = 3010
let transporter = nodemailer.createTransport({
   service:'gmail',
    auth: {
        user: 'itincubatorkarolina1992@gmail.com', // generated ethereal user
        pass: '1234567890HEllo', // generated ethereal password
    },
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/sendMessage', async function (req, res) {
    let info = await transporter.sendMail({
        from: 'Karolina message', // sender address
        to: 'karolinaesepenok@gmail.com', // list of receivers
        subject:'Test gmail ', // Subject line
       // text: 'Hello', // plain text body
        html: '<b>Привет.</b> Тестирую', // html body
    });

    res.send('Hello, I am mudila')
})

//app.use('/products', productsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})