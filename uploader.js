const { ticalc, tifiles } = require('ticalc-usb');

async function chooseCalc() {
    document.getElementById('buttonPressed').innerHTML = "Button Pressed";
    await ticalc.choose();
}

await ticalc.init();

document.getElementById('chooseButton').addEventListener('click', await chooseCalc);
document.getElementById('models').innerHTML = models();





