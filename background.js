/**
 * Created by janeluck on 8/7/16.
 */
chrome.app.runtime.onLaunched.addListener(
    function () {
        chrome.app.window.create('index.html');
    }
);