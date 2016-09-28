blobListen('#document').ready(function(){

  var app = new App();
  makeOL();

  blobListen('create').click(function(){
    var note = document.getElementById("new-note").value;
    app.createNote(note);
    document.getElementById('BlobList').appendChild(addLi());
    updateHomeDisplay();
  });

//  Helper functions follow

  function updateHomeDisplay() {
    uiHome();
  }

  function uiHome(){
    blobListen('uiCreateNote').show();
    blobListen('uiList').show();
  }

  function makeOL() {
    var list = document.createElement('ol');
    list.setAttribute("id", "BlobList");
    document.getElementById('uiList').appendChild(list);
  }

  function addLi() {
    var item = document.createElement('li');
    var note = app.mapNotes().slice(-1)[0];
    var index = app.mapNotes().indexOf(note);
    item.setAttribute("id", "headline-" + index);
    item.appendChild(document.createTextNode(note));
    var article = document.createElement('p');
    article.setAttribute("style", "display:none");
    article.setAttribute("id", "article-" + index);
    var fullNote = app.notes[index];
    article.appendChild(document.createTextNode(fullNote));
    item.appendChild(article);
    item.addEventListener('click', function(){
      blobListen('article-'+index).show();
    }, false);
    return item;
  }

});
