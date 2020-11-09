// Empty JS for your own code to be here
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

let IN790 = [];
let IN750 = [];
let IN760 = [];
let IN700 = [];
fetch('https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/7965e1ce6ae46e53fe3030cf96562df58d11b5fb/attendance.json')
  .then(status)
  .then(json)
  .then(function(data) {
	for(var i = 0; i < data.length; i++) {
		switch (data[i].class) {
			case "IN790":
				IN790.push(data[i]);
				break;
			case "IN750":
				IN750.push(data[i]);
				break;
			case "IN760":
				IN760.push(data[i]);
				break;
			default:
				IN700.push(data[i]);
				break;
		}
	}
	window.localStorage.setItem("IN790", JSON.stringify(IN790));
	window.localStorage.setItem("IN750", JSON.stringify(IN750));
	window.localStorage.setItem("IN760", JSON.stringify(IN760));
	window.localStorage.setItem("IN700", JSON.stringify(IN700));

  }).catch(function(error) {
    console.log('Request failed', error);
  });
let radios = document.forms["classes"].elements["class"];

for (var i = 0, max = radios.length; i < max; i++) {
	radios[i].onclick = function () {
		activeClassId = this.value;
		let IN790 = JSON.parse(window.localStorage.getItem("IN790"));
		let IN750 = JSON.parse(window.localStorage.getItem("IN750"));
		let IN760 = JSON.parse(window.localStorage.getItem("IN760"));
		let IN700 = JSON.parse(window.localStorage.getItem("IN700"));
		
		function getClassData(classID) {
			list = [];
			switch (classID) {
				case "0":
					list = IN790;
					break;
				case "1":
					list = IN750;
					break;
				case "2":
					list = IN760;
					break;
				default:
					list = IN700;
					break;
			}
			return list;
		}
		
		let activeClass = getClassData(activeClassId);
		
		document.getElementById("class-name").innerHTML = activeClass[0].class;
		
		function addRow(tableID, person) {
		  // Get a reference to the table
		  let tableRef = document.getElementById(tableID);

		  // Insert a row at the end of the table
		  let newRow = tableRef.insertRow(-1);
		  
		  let label1 = "";
		  let label2 = "";
		  let label3 = "";
		  let label4 = "";
		  let label5 = "";
		  let labelTotal = "";
		  let absent = 0;

		  // Insert three cells in the row
		  let newCellId = newRow.insertCell(0);
		  let newCellName = newRow.insertCell(1);
		  let newCellAtt4 = newRow.insertCell(2);
		  let newCellAtt3 = newRow.insertCell(3);
		  let newCellAtt2 = newRow.insertCell(4);
		  let newCellAtt1 = newRow.insertCell(5);
		  let newCellAtt5 = newRow.insertCell(6);
		  let newCellAtt6 = newRow.insertCell(7);
		  let newCellAtt7 = newRow.insertCell(8);
		  let newCellAtt8 = newRow.insertCell(9);
		  let newCellAtt9 = newRow.insertCell(10);
		  let newCellAtt10 = newRow.insertCell(11);
		  let newCellAtt11 = newRow.insertCell(12);
		  let newCellAtt12 = newRow.insertCell(13);
		  let newCellAttTotal = newRow.insertCell();
		  for (var i = 0; i < person.attendance.length; i++) {
			if (person.attendance[i] == "a" || person.attendance[i] == "s" || person.attendance[i] == "l") {
				absent += 1;
			}
			switch (i) {
				case 0:
					newCellAtt1.setAttribute("class", "Cell4");
					switch (person.attendance[i]) {
						case "s":
							newCellAtt1.style.backgroundColor = "red";
							label1 = document.createTextNode(person.attendance[i]);
							newCellAtt1.appendChild(label1);
							break;
						case "a":
							newCellAtt1.style.backgroundColor = "orange";
							label2 = document.createTextNode(person.attendance[i]);
							newCellAtt1.appendChild(label2);
							break;
						case "e":
							newCellAtt1.style.backgroundColor = "yellow";
							label3 = document.createTextNode(person.attendance[i]);
							newCellAtt1.appendChild(label3);
							break;
						case "p":
							newCellAtt1.style.backgroundColor = "green";
							label4 = document.createTextNode(person.attendance[i]);
							newCellAtt1.appendChild(label4);
							break;
						case "l":
							newCellAtt1.style.backgroundColor = "gray";
							label5 = document.createTextNode(person.attendance[i]);
							newCellAtt1.appendChild(label5);
							break;							
					}
					break;
				case 1:
					newCellAtt2.setAttribute("class", "Cell3");
					switch (person.attendance[i]) {
						case "s":
							newCellAtt2.style.backgroundColor = "red";
							label1 = document.createTextNode(person.attendance[i]);
							newCellAtt2.appendChild(label1);
							break;
						case "a":
							newCellAtt2.style.backgroundColor = "orange";
							label2 = document.createTextNode(person.attendance[i]);
							newCellAtt2.appendChild(label2);
							break;
						case "e":
							newCellAtt2.style.backgroundColor = "yellow";
							label3 = document.createTextNode(person.attendance[i]);
							newCellAtt2.appendChild(label3);
							break;
						case "p":
							newCellAtt2.style.backgroundColor = "green";
							label4 = document.createTextNode(person.attendance[i]);
							newCellAtt2.appendChild(label4);
							break;
						case "l":
							newCellAtt2.style.backgroundColor = "gray";
							label5 = document.createTextNode(person.attendance[i]);
							newCellAtt2.appendChild(label5);
							break;							
					}
					break;
				case 2:
					newCellAtt3.setAttribute("class", "Cell2");
					switch (person.attendance[i]) {
						case "s":
							newCellAtt3.style.backgroundColor = "red";
							label1 = document.createTextNode(person.attendance[i]);
							newCellAtt3.appendChild(label1);
							break;
						case "a":
							newCellAtt3.style.backgroundColor = "orange";
							label2 = document.createTextNode(person.attendance[i]);
							newCellAtt3.appendChild(label2);
							break;
						case "e":
							newCellAtt3.style.backgroundColor = "yellow";
							label3 = document.createTextNode(person.attendance[i]);
							newCellAtt3.appendChild(label3);
							break;
						case "p":
							newCellAtt3.style.backgroundColor = "green";
							label4 = document.createTextNode(person.attendance[i]);
							newCellAtt3.appendChild(label4);
							break;
						case "l":
							newCellAtt3.style.backgroundColor = "gray";
							label5 = document.createTextNode(person.attendance[i]);
							newCellAtt3.appendChild(label5);
							break;							
					}
					break;
				default:
					newCellAtt4.setAttribute("class", "Cell1");
					switch (person.attendance[i]) {
						case "s":
							newCellAtt4.style.backgroundColor = "red";
							label1 = document.createTextNode(person.attendance[i]);
							newCellAtt4.appendChild(label1);
							break;
						case "a":
							newCellAtt4.style.backgroundColor = "orange";
							label2 = document.createTextNode(person.attendance[i]);
							newCellAtt4.appendChild(label2);
							break;
						case "e":
							newCellAtt4.style.backgroundColor = "yellow";
							label3 = document.createTextNode(person.attendance[i]);
							newCellAtt4.appendChild(label3);
							break;
						case "p":
							newCellAtt4.style.backgroundColor = "green";
							label4 = document.createTextNode(person.attendance[i]);
							newCellAtt4.appendChild(label4);
							break;
						case "l":
							newCellAtt4.style.backgroundColor = "gray";
							label5 = document.createTextNode(person.attendance[i]);
							newCellAtt4.appendChild(label5);
							break;							
					}
					break;
			}
		  }
		  labelTotal = document.createTextNode(absent);
		  newCellAttTotal.appendChild(labelTotal);
		  newCellAttTotal.setAttribute("class", "absent");
		  newCellAtt5.setAttribute("class", "Cell5");
		  newCellAtt5.setAttribute("value", person.index);
		  newCellAtt5.setAttribute("onClick", "colorChanger(this);");
		  newCellAtt6.setAttribute("class", "Cell5");
		  newCellAtt6.setAttribute("value", person.index);
		  newCellAtt6.setAttribute("onClick", "colorChanger(this);");
		  newCellAtt7.setAttribute("class", "Cell5");
		  newCellAtt7.setAttribute("value", person.index);
		  newCellAtt7.setAttribute("onClick", "colorChanger(this);");
		  newCellAtt8.setAttribute("class", "Cell5");
		  newCellAtt8.setAttribute("value", person.index);
		  newCellAtt8.setAttribute("onClick", "colorChanger(this);");
		  newCellAtt9.setAttribute("class", "Cell5");
		  newCellAtt9.setAttribute("value", person.index);
		  newCellAtt9.setAttribute("onClick", "colorChanger(this);");
		  newCellAtt10.setAttribute("class", "Cell5");
		  newCellAtt10.setAttribute("value", person.index);
		  newCellAtt10.setAttribute("onClick", "colorChanger(this);");
		  newCellAtt11.setAttribute("class", "Cell5");
		  newCellAtt11.setAttribute("value", person.index);
		  newCellAtt11.setAttribute("onClick", "colorChanger(this);");
		  newCellAtt12.setAttribute("class", "Cell5");
		  newCellAtt12.setAttribute("value", person.index);
		  newCellAtt12.setAttribute("onClick", "colorChanger(this);");

		  // Append a text node to the cell
		  let idText = document.createTextNode(person.id);
		  newCellId.appendChild(idText);
		  
		  let fullName = person.name.first + " " + person.name.last;
		  let name = document.createTextNode(fullName);
		  newCellName.appendChild(name);
		}
		
		document.getElementById("class-data").innerHTML = "";
		
		for (var i = 0; i < activeClass.length; i++) {
			addRow('class-data', activeClass[i])
		}
	}
}