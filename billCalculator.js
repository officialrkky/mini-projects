let button = document.getElementById('button');

button.addEventListener('click', function(){
  let bill = document.getElementById('bill').value;
  let tip = document.getElementById('tip').value;
  let noPPL = document.getElementById('noPPL').value;
  
    
  let tipAmount = document.getElementById('tipAmount').value = bill * (tip / 100);
  
  let mealAmount = document.getElementById('mealAmount').value = parseFloat(bill) + parseFloat(tip)
  
 let PPCost = document.getElementById('PPCost').value = mealAmount / noPPL
})

let resetButton = document.getElementById('reset')

reset.addEventListener('click', function(){
   let bill = document.getElementById('bill').value = "";
  let tip = document.getElementById('tip').value = "";
  let noPPL = document.getElementById('noPPL').value = "";
  let tipAmount = document.getElementById('tipAmount').value = "";
  let mealAmount = document.getElementById('mealAmount').value = "";
  let PPCost = document.getElementById('PPCost').value = "";
})
