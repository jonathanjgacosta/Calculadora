chrome.app.runtime.onLaunched.addListener(
function () {
chrome.app.window.create('calculadora.html');
}
);