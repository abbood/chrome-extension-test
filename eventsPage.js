chrome.runtime.onInstalled.addListener(onInit);
chrome.runtime.onStartup.addListener(onStartup);

function onInit() {
  console.log("on init");
}

function onStartup() {
  console.log("on startup");
}

if (chrome.runtime && chrome.runtime.onStartup) {
  chrome.runtime.onStartup.addListener(function() {
    console.log('Starting browser... updating icon.');
  });
}
var a=0;

function count()
{
  console.log("we are in count!");
  a++;
  document.getElementById("demo").innerHTML=a;
  return a;
}
var button=document.getElementById("countButton");
button.onclick = count;

console.log("hello man!");
console.log("this is button"+button);
