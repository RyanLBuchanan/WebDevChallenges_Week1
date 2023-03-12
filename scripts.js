/* ITEM TO LIST FUNCTION */
const list = ["Cats", "Astronomy", "Gyms"];
        
console.log(list);

function myFunc(item){  
  list.push(item);
  console.log(list);
}

myFunc("Islands");
myFunc("Mathematics");
myFunc("Diving");



// /* ALERT PRINT TO LIST */
var alertDirections = document.getElementById("alertDirectionsText");

// for (var i = 0; i < list.length; i++) {
//     let listText = list[item] + ", ".toString();
//     return listText;
// }

function updateHTMLList(){
  alertDirections.innerHTML = "<b>Click on the button below to print the alert:" + 
                              "</b><br><br> The list includes: " + list;
}

updateHTMLList();
  
function alertFunc() {
    alert(list);
}



/* TEXT BOX INPUT TO LIST */
function addToList() {
  var newItemText = document.getElementById('newItem').value;
  list.push(newItemText);

  console.log(list);
  updateHTMLList();
}

document.getElementById('addToListButton').addEventListener('click', addToList);

