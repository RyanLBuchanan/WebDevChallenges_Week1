const list = [100, 200, 300];
        
console.log(list);

function myFunc(item){  
  list.push(item);
  console.log(list);
}

myFunc(400);
myFunc(500);
myFunc(600);