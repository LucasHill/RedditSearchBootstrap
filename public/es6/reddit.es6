(function() {
	document.addEventListener("DOMContentLoaded", function(event) {
		var reqListener = (response) => {
			let results = JSON.parse(response.target.responseText);

			var list = document.getElementById('resultsList');

			while(list.firstChild ) {
				list.removeChild( list.firstChild );
			}

			results.forEach((element, index)=> {
				var newLI = document.createElement('li');
				newLI.classList.add('list-group-item');
				newLI.classList.add('animated');
				newLI.classList.add('bounceInUp');
				
				let aTag = document.createElement('a');
				aTag.appendChild(document.createTextNode(element.title));
				aTag.setAttribute('href', element.url);
				aTag.setAttribute('target', "_blank");
				newLI.appendChild(aTag);

				setTimeout(()=>
					{list.appendChild(newLI)}, 200*index
				);
			})
		};

		document.getElementById('searchButton').addEventListener('click', ()=> {
			let req = new XMLHttpRequest(),
			searchInput = document.getElementById('searchInput').value;

			req.addEventListener("load", reqListener);
			req.open("POST", "search/");
			req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			req.send(JSON.stringify({query: searchInput}));
		});
	});
})()