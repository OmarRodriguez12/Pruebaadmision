var jsonData = '[{"tittle":"Lorem Ipsum","description":"sollicitudin libero metus, non mollis mauris euismod ut. ","src":"img/icon.png"},{"tittle":"Lorem Ipsum","description":"sollicitudin libero metus, non mollis mauris euismod ut. ","src":"img/icon.png"},{"tittle":"Lorem Ipsum","description":"sollicitudin libero metus, non mollis mauris euismod ut. ","src":"img/icon.png"},{"tittle":"Lorem Ipsum","description":"sollicitudin libero metus, non mollis mauris euismod ut. ","src":"img/icon.png"},{"tittle":"Lorem Ipsum","description":"sollicitudin libero metus, non mollis mauris euismod ut. ","src":"img/icon.png"},{"tittle":"Lorem Ipsum","description":"sollicitudin libero metus, non mollis mauris euismod ut. ","src":"img/icon.png"}]'

function showItems (){

  var data = JSON.parse(jsonData);

  var sectionJSON = document.querySelector(".contentSectionJSON");
  var sectionJSONItem = document.querySelector("#itemSectionJSON");

  var newHTMl = ""
  for (var i = 0; i < data.length; i++) {

  var item = data[i];
  var newItem = sectionJSONItem.innerHTML.replace("JSON_SRC", item.src).replace("JSON_TITLE", item.tittle)
  .replace("JSON_CONTENT", item.description);
    newHTMl += ('<div class="itemSectionJSON col-sm-12 col-lg-4 align-items-center  text-center" >'+ newItem+ '</div>');
    if((i+1)%3 === 0) {
      newHTMl +="<hr class='lineDivision' />"
    }
  }
  sectionJSON.insertAdjacentHTML("afterbegin", newHTMl)
  sectionJSONItem.remove();
}

showItems();