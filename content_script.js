// Permissions: None
alert(
    'content_script.js loaded.\n\n' +
    'Description: This JS is automatically injected to pages specified in manifest.json. required.js will also be loaded if that is specified in manifest.json.\n\n' +
    'Advantages: Fast, no permissions, easier to implement, resillient\n' +
    'Disavtanges: Website functions not yet available.'
)
console.log('Bodies: ' + document.getElementsByTagName('body').length);
console.log('Spans: ' + document.getElementsByTagName('span').length);