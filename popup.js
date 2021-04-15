// somewhere to store created password
let createdPassword = [];
// get pianokeys from the page
const pianoKeys = document.querySelectorAll('.piano-key')
// loop over node list
for (let key of pianoKeys) {
    // add click event listener
    key.addEventListener('click', e => {
        // return target id.
        createdPassword.push(e.target.id)
    })
}

