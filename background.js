const button = document.querySelector(".btn");

function log(message) {
    console.alert(message);
}

button.addEventListener("click", log, "clicked!!")