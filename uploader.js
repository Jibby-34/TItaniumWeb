const { ticalc, tifiles } = require('ticalc-usb');

document.getElementById('chooseButton').addEventListener('click', await chooseCalc);
document.getElementById('models').innerHTML = "2";

function chooseCalc() {
    document.getElementById('buttonPressed').innerHTML = "Button Pressed";
}

await ticalc.init();





