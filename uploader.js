let clickCount = 0;

document.getElementById('incrementButton').addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCounter').innerText = clickCount;
});
