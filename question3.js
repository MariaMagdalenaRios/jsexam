// 3. (3p) 
// Skapa en funktion findMax() som tar en array med nummer
// och returnerar det största värdet i arrayen. 


function findMax(array) {
    // Din kod här:
  let biggest = array[0];

  for (let num of array) {
    if (num > biggest) {
      biggest = num;
    }
  }
  
  return biggest;
}



//console.log(findMax([3, 1, 9, 4])); // Ska logga 9

