import css from './style.css';
import duncan from './duncan.png';
import rander from './rander';

console.log(css);
console.log(duncan);

const div = document.createElement('div');
div.id = 'root';

document.body.appendChild(div);
div.textContent = rander();

const img = document.createElement('img');
img.src = duncan;
document.body.appendChild(img);

const mov = document.createElement('video');
mov.src = 'spaghetti.mp4';
document.body.appendChild(mov);
