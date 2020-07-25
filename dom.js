//Set the background color of a paragraph 
let setColor = () => {
  document.getElementById('demo').style.backgroundColor ='coral';
}

//Get the href attribute of the link 
let myLink = () => {
  let link = document.getElementById('myAnchor').href;
  document.getElementById('getMyLink').innerHTML = link; 
}

//Add rows to table
let firstTable = () => {
 let table = document.getElementById('myTable');
 let row = table.insertRow(2);
 let cell = row.insertCell(0);
 let cells = row.insertCell(1);
 cell.innerHTML = 'cell1';
 cells.innerHTML = 'cell2';
}

//Display number of items and items in the list
let numberOfItems = () => {
  let list = document.getElementById('lunch').length;
  document.getElementById('displayList').innerHTML = list;

  for(let i = 0; i < list; i++) {
    let items = list.options[i].text + "<br>";
  }
  document.getElementById('listing').innerHTML = items;
}




