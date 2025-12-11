// 3. (3p) 
// Skapa en funktion findMax() som tar en array med nummer
// och returnerar det största värdet i arrayen. 


function findMax(array) {
    // Din kod här:
    
   return array.filter(function (max) {
    return max.num >= 9;
   }); 
   
}

const num = [3, 1, 9, 4];


//console.log(findMax([3, 1, 9, 4])); // Ska logga 9

