//Permissions: "http*://*/*"
alert('onready.js loaded.\n\n' +
    'Description: This is loaded via the chrome.tabs.onUpdated listener, when changeInfo.status is equal to "completed". In other words, when the page finishes loading. This can be adjusted to match any criteria of course, just look at injector.js\n' +
    'Advantages: website functions should be available.\n' +
    'Disadvantges: Does not run until fully loaded, so addon will not feel good if site has any slow-loading elements (ads, for example).\n'
);
//JQuery check:
// alert($)
console.log('Bodies: ' + document.getElementsByTagName('body').length);
console.log('Spans: ' + document.getElementsByTagName('span').length);