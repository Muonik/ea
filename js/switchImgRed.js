let images = ["img/core_og.jpeg", "img/core_swell.png"];

let index = 0;
let imgElement = document.getElementById("innerImg");

function change() {
   imgElement.src = images[index];
   index > 0 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 300);
};

