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

var jsondata = [];

fetch('https://gist.githubusercontent.com/eallenOP/b40fa9bba517ff258da395c79edd2477/raw/7965e1ce6ae46e53fe3030cf96562df58d11b5fb/attendance.json')
  .then(status)
  .then(json)
  .then(function(data) {
	jsondata = data;
	console.log(jsondata)
	classes = [];
	for(var i = 0; i < jsondata.length; i++) {
		var obj = jsondata[i];
		var n = classes.includes(obj.class);
		if (n == false) {
			classes.push(obj.class)
		}
	}
	for (var i = 0; i < classes.length; i++) {
		document.getElementById("classes").innerHTML += `<li style="list-style-type: none;"><a href="#" class="class" id=${classes[i]}><strong>${classes[i]}</strong></a></li>`;
	}
  }).catch(function(error) {
    console.log('Request failed', error);
  });
  
console.log(jsondata);