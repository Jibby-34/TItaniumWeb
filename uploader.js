const { ticalc, tifiles } = require('ticalc-usb');

document.getElementById('chooseButton').addEventListener('click', await chooseCalc);
document.getElementById('models').innerHTML = models();

async function chooseCalc() {
    document.getElementById('buttonPressed').innerHTML = "Button Pressed";
    await ticalc.choose();
}

await ticalc.init();





