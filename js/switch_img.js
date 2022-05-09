//keeping it here as a template
let images = []
let index = 0;
let imgElement = document.getElementById("change-img");

function change() {
   imgElement.src = images[index];
   index >= (images.length - 1) ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 333);
};

