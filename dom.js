// Set background color 
function setColor() {
	  document.getElementById("demo").style.backgroundColor = 'coral';


} 

// getting the href link 
function myLink() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("water").innerHTML = x;
}

// Adding rows 
function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}

// display list items 
function list() {
	let items = document.getElementById("lunch").length;
	document.getElementById("super").innerHTML = items;

}
function drop() {
  var A = document.getElementById("lunch");
  var txt = "";
  var i;
  for (i = 0; i < A.length; i++) {
    txt = txt + A.options[i].text + "<br>";
  }
  
  document.getElementById("down").innerHTML = txt;
}