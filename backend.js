
const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
// const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'; HAPPY BIRTHDAY = 'ssdsgt'
let secretKeyBase = 'vOVH6sdmpNWjRRIqCc7rdxs01l';
// somewhere to store secret key
let secretKey = '';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

module.exports = {
    encrypt,
    decrypt
};

// const { encrypt, decrypt } = require('./crypto');

// const hash = encrypt('Hello World!');

// console.log(hash);

// {
//     iv: '237f306841bd23a418878792252ff6c8',
//     content: 'e2da5c6073dd978991d8c7cd'
// }

// const text = decrypt(hash);

// console.log(text); // Hello World!





const express = require('express')
const app = express()
const port = 3001

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// for testing only
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// send plain text to server
// return hashed text
app.post('/encrypt', function (req, res) {
    res.send(JSON.stringify(encrypt(req.body)))
    console.log(JSON.stringify(encrypt(req.body)))
    secretKey = '';
})

// Run server with 
// node backend.js

// testing commands curl
// encrypt a message
// curl -X POST -d "hello" -H "Content-Type: text/plain" http://127.0.0.1:3001/encrypt

// decrypt, Windows has dodgey line endings and needs the quotes escaping
// curl -X POST -d "{\"iv\":\"9e0a7deac29aeb14d376c2fd4fcbd337\",\"content\":\"9a5b5f2551\"}" -H "Content-Type: application/json" http://127.0.0.1:3001/decrypt

// send hash key to server
// return plain text
app.post('/decrypt', function (req, res) {
    res.send(decrypt(req.body))
    console.log(decrypt(req.body))
    secretKey = '';
})

// will have to send the key to the backend as we are doing the encryption there.
// can make more secure by moving the encryption to the front end.
app.post('/sendpass', function (req, res) {
    // reveived secretkey
    console.log(req.body)
    // concat with existing base
    secretKey = secretKeyBase + req.body;
    console.log(secretKey)

    res.send('stored')
    // res.send(decrypt(req.body))
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



