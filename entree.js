function recherche(e) {
  
  var URL = "";
  mot = document.getElementById('zonetexte').value;

  
  URL="http://www.dicolatin.com/FR/LAK/0/"+mot+"/index.htm";


  chrome.tabs.create({
          url: URL,
        });  
}

document.getElementById('form2').addEventListener("submit", recherche);
