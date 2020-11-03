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
			console.log(list);
			return list;
		}
		
		let activeClass = getClassData(activeClassId);
		
		document.getElementById("class-name").innerHTML = activeClass[0].class;
		
		function addRow(tableID, id, first, last/*, attendance1, attendance2, attendance3, attendance4*/) {
		  // Get a reference to the table
		  let tableRef = document.getElementById(tableID);

		  // Insert a row at the end of the table
		  let newRow = tableRef.insertRow(-1);

		  // Insert three cells in the row
		  let newCellId = newRow.insertCell(0);
		  let newCellName = newRow.insertCell(1);
		  //let newCellAtt1 = newRow.insertCell(2);
		  //let newCellAtt2 = newRow.insertCell(2);
		  //let newCellAtt3 = newRow.insertCell(2);
		  //let newCellAtt4 = newRow.insertCell(2);

		  // Append a text node to the cell
		  let idText = document.createTextNode(id);
		  newCellId.appendChild(idText);
		  
		  let fullName = first + " " + last;
		  let name = document.createTextNode(fullName);
		  newCellName.appendChild(name);
		}
		
		document.getElementById("class-data").innerHTML = "";
		
		for (var i = 0; i < activeClass.length; i++) {
			addRow('class-data', activeClass[i].id, activeClass[i].name.first, activeClass[i].name.last)
		}
	}
}