import { multiply, multiplyWithx } from './lib';
console.log(multiply(5,5)); // 25
console.log(multiplyWithx(6)); // 12

document.getElementById('tombol1').addEventListener('click', function() {
    document.getElementById('multiplyab').innerHTML = multiply(5, 5);
  });
  
  document.getElementById('tombol2').addEventListener('click', function() {
    document.getElementById('multiplyxy').innerHTML = multiplyWithx(6);
  });