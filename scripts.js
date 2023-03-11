// Item to list function
const list = ["Cats", "Astronomy", "Gyms"];
        
console.log(list);

function myFunc(item){  
  list.push(item);
  console.log(list);
}

myFunc("Islands");
myFunc("Mathematics");
myFunc("Diving");

// Alert to print a list
var alertDirections = document.getElementById("alertDirectionsText");

// foreach (item in list)
//     list = list[item] + ", ";
//     return list;

alertDirections.innerHTML = "<b>Click on the button below to print the alert" + 
                            "</b><br><br> The list includes: " + list[0] + ", " 
                            + list[1] + ", " + list[2] + ", " + list[3] + ", " 
                            + list[4] + ", " + list[5];
  
function alertFunc() {
    alert(list);
}