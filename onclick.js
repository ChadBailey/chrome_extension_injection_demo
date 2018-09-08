// Permissions: activeTab or "http*://*/*"
alert("onclick.js: This JS is injected when clicking extension icon.\n\nCurrent website title:\n" + document.title);
console.log('Bodies: ' + document.getElementsByTagName('body').length)
console.log('Spans: ' + document.getElementsByTagName('span').length)
