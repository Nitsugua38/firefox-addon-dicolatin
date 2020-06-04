
function onRequest(info, tab) {
	var selection = info.selectionText;
//do something with the selection
if(selection){
	var serviceCall = 'http://www.dicolatin.com/FR/LAK/0/' + encodeURIComponent(selection)+ '/index.htm'
	chrome.tabs.create({url: serviceCall});
}
};

chrome.contextMenus.create({
	id: "bing_search",
	contexts: ["selection"],
	title: "Rechercher avec Dicolatin",
	"onclick" : onRequest
});
