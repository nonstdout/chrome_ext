// let backendUrl = "http://127.0.0.1:3001"

// // somewhere to store created password
// let createdPassword = "";
// // get pianokeys from the page
// const pianoKeys = document.querySelectorAll('.key');
// // loop over node list
// for (let key of pianoKeys) {
//     // add click event listener
//     key.addEventListener('click', e => {
//         // return target id.
//         createdPassword += e.target.id;
//         console.log(e)
//         console.log(createdPassword)
//     })
// }
// // store password
// // sends password to back end server and stores the response
// // might need to change to local storage
// const passKey = document.querySelector('#password')
// passKey.addEventListener('click', e => {
//     if (e.target.id === 'password') {
//         const response = fetch(`${backendUrl}/sendpass`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'text/plain'
//             },
//             body: createdPassword
//         })
//         alert("Password stored!")
//         console.log("Password stored: ", createdPassword)
//         // clear password on front end
//         createdPassword = '';
//     }
// })

// // send message
// const message = document.querySelector('#message')

// const encryptButton = document.querySelector('#encrypt')
// encryptButton.addEventListener('click', e => {
//     if (e.target.id === 'encrypt') {
//         fetch(`${backendUrl}/encrypt`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'text/plain'
//             },
//             body: message.value
//         }).then(response => response.text())
//             .then(response => message.value = response)
//         console.log("message box text:", JSON.stringify(message.value))
//         // update message box with result of fetch
//     }
// })

// const decryptButton = document.querySelector('#decrypt')
// decryptButton.addEventListener('click', e => {
//     if (e.target.id === 'decrypt') {
//         fetch(`${backendUrl}/decrypt`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: message.value
//         }).then(response => response.text())
//             .then(response => message.value = response)
//         console.log("message box text:", message.value)
//         // update message box with result of fetch
//         // { iv: '52f049eff003478e80d5b42d7596d355', content: 'f901014cbd82' }
//     }
// })


// import assert from 'assert';

// const {
//   createDiffieHellman,
// } = await import('crypto');

// // Generate Alice's keys...
// const alice = createDiffieHellman(2048);
// const aliceKey = alice.generateKeys();

// // Generate Bob's keys...
// const bob = createDiffieHellman(alice.getPrime(), alice.getGenerator());
// const bobKey = bob.generateKeys();

// // Exchange and generate the secret...
// const aliceSecret = alice.computeSecret(bobKey);
// const bobSecret = bob.computeSecret(aliceKey);

// // OK
// assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));



// let text = document.querySelectorAll('p')

// for (let key of text) {key.innerText = "ghjkgc"}