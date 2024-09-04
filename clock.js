function updateTime() {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
}

// Update the time immediately when the page loads
updateTime();

// Update the time every second
setInterval(updateTime, 1000);