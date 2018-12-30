
$(document).ready(()=>{
  const winCombos = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["6","4","2"]
  ];
  
  
  let xCells = [];
  let oCells = [];
  let boradStatus = [];
  
  const X = {value:"X", cells:xCells};
  const O = {value:"O", cells:oCells};
  
  let currentTurn = X;
  const cells = $('.cell');
  
  startGame();
  
  function startGame(){
    $('.cell').on("click",turnClick);
  }
  
  function turnClick(event){
    let clickedElement = $('div#'+event.target.id);
    clickedElement.html(currentTurn.value);
    clickedElement.unbind('click');
    
    
     currentTurn.cells.push(event.target.id);
     checkForWin()
    
    if(currentTurn == X){
      currentTurn = O;
    }else{
      currentTurn = X
    }
    
  }
  
  
  function checkForWin(){
    for(let i in winCombos){
      
     let combo = winCombos[i].filter((elem)=> {
        return currentTurn.cells.indexOf(elem) > -1;
      })
      
     if(combo.length == 3) alert(currentTurn.value + ' won');
      //currentTurn.cells.includes(winCombos[i][0])
     /*  if(winCombos[i].sort().join(',') === xCells.sort().join(',')){
        alert('same members');
      } */
    }
  }

});

