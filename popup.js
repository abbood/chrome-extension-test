window.onload = function () {
    var otherWindows = chrome.extension.getBackgroundPage();
    console.log(otherWindows.backgroundFunction());
    chrome.tabs.executeScript(null, {file:"https://apis.google.com/js/client.js?onload=checkAuth"});
    var button = document.getElementById('authorize-button');
    button.onclick = function(event) {
        otherWindows.handleAuthClick(event);
    }
 }

