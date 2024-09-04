const { ticalc, tifiles } = require('ticalc-usb');

clickCount = 0;

document.getElementById('chooseButton').addEventListener('click', displayClick());

function displayClick() {
    document.getElementById('clickCounter').innerHTML = clickCount;
    clickCount++;
}





