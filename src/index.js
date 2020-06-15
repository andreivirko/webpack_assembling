import "./index.html";
import "./styles.css";
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

const instance = basicLightbox.create(
    document.getElementById('231')
)

console.log(instance);

const button = document.getElementById("123");
console.log(button);

button.addEventListener("click", instance.show);