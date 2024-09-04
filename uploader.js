const { ticalc, tifiles } = require('ticalc-usb');

function isBrowserSupported() {
    document.getElementById('browserSupported').innerHTML = browserSupported();
}

setInterval(isBrowserSupported, 1000);


