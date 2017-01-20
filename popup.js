(function () {
    var otherWindows = chrome.extension.getBackgroundPage();
    console.log(otherWindows.backgroundFunction());
    chrome.tabs.executeScript(null, {file:"https://apis.google.com/js/client.js?onload=checkAuth"});
    document.getElementById('authorize-button').onclick = otherWindows.handleAuthClick(event)
})();

