chrome.browserAction.onClicked.addListener(function() {
    var strWindowOptions = "location=yes,height=450,width=410,scrollbars=no,status=no,statusbar=no";
    var URL = "https://messenger.com";
    var win = window.open(URL, "FB", strWindowOptions);
    if(win.location.href === 'about:blank'){
        win.location.href = URL;
    }
    var windowLeft = window.screen.availWidth;
    win.moveTo(windowLeft, 80);
});
