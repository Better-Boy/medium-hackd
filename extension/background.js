// background script
chrome.runtime.onMessage.addListener( function (message, sender, sendResponse) {
    if (message.clicked) {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            let url = tabs[0].url;
            url = url.substring(8)
            console.log(url)
                console.log("try")  
                    console.log("sending")
                   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                       console.log("check")
                      chrome.tabs.sendMessage(tabs[0].id, {action: {message: "call", url:`http://localhost:5000/${url}`}}, function(response) {});  
                   })
        });        
    }
  });
  
