// Injection when page fully loaded
//Permissions: "http://*/*", "https://*/*"
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // alert( 'chrome.tabs.onUpdated triggered.\n' +
    //     'TabId:\n' + JSON.stringify(tabId,null,'\t') + '\n\n' +
    //     'changeInfo:\n' + JSON.stringify(changeInfo,null,'\t') + '\n\n' +
    //     'tab:\n' + JSON.stringify(tab,null,'\t')
    // );
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tabId, {
            // code:"alert('chrome.tabs.onUpdated executeScript on tab successful, loading onready.js');"
            file: "onready.js"
        });
    }
});

// Run when new tab is activated
// Permissions: None
chrome.tabs.onActivated.addListener(function(activeInfo) {
    // how to fetch tab url using activeInfo.tabid
    chrome.tabs.get(activeInfo.tabId, function(tab){
        //NOTE1: This does not run in the context of the website document, so console.log does not work
        //NOTE2: This is annoyingly chatty, so disabled by default
        //alert('Tab change detected:\n' + JSON.stringify(tab,null,'\t'));
    });
  });

// Run when addon icon is clicked
// Permissions: activeTab or "http://*/*", "https://*/*"
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, {
		file: 'onclick.js'
	});
});

