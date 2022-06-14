import '../index.css';
import rollupLogo from '../assets/rollup-dot-js.png';

const imageContainer = document.querySelector('.logo');
const imageElement = document.createElement('img');
imageElement.src = rollupLogo;

imageContainer.append(imageElement);

console.log('Hello, World!');
