const { ticalc, tifiles } = require('ticalc-usb');

async function chooseCalc() {
    await ticalc.choose();
}

await ticalc.init();

document.getElementById('chooseButton').addEventListener('click', await chooseCalc);




