var
   contexts = ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"];

chrome.contextMenus.create({
   "title": "tuf4d",
   "contexts": contexts,
   "onclick": onClick
});

chrome.browserAction.onClicked.addListener(function (tab) {
   onClick({}, tab);
});

function onClick(info, tab) {
   var
      url = tab.url;

   if (url.match("^http://dictionary.cambridge.org/")) {
      var
         message = "cambridge_get_mp3_url";

      chrome.tabs.sendMessage(tab.id, message);
   } else if (url.match("^http://tiengnhat24h.com/")) {
      var
         message = "jgv";

      chrome.tabs.sendMessage(tab.id, message);
   }
}
