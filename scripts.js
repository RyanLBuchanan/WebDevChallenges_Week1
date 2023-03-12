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

alertDirections.innerHTML = "<b>Click on the button below to print the alert:" + 
                            "</b><br><br> The list includes: " + list[0] + ", " 
                            + list[1] + ", " + list[2] + ", " + list[3] + ", " 
                            + list[4] + ", " + list[5];
  
function alertFunc() {
    alert(list);
}



/* TEXT BOX INPUT TO LIST */
function addToList() {
  var newItemText = document.getElementById('newItem').value;
  list.push(newItemText);

  console.log(list);
}

document.getElementById('addToListButton').addEventListener('click', addToList);