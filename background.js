//Partie 1 : séléction de texte
function onRequest(info, tab) {
	var selection = info.selectionText;

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

// Partie 2 : Barre d'adresse

const BASE_URL = "http://www.dicolatin.com/FR/LAK/0/";

browser.omnibox.setDefaultSuggestion({
  description: `Entrez un mot latin`
});

browser.omnibox.onInputEntered.addListener((text, disposition) => {
  let url = text;
  if (!text.startsWith(BASE_URL)) {
    // Update the url if the user clicks on the default suggestion.
    url = `${BASE_URL}${text}/index.htm`;
  }
  switch (disposition) {
    case "currentTab":
      browser.tabs.update({url});
      break;
    case "newForegroundTab":
      browser.tabs.create({url});
      break;
    case "newBackgroundTab":
      browser.tabs.create({url, active: false});
      break;
  }
});
