function loadRepos() {
	const username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(response => {
			console.log(response);
			if(!response.ok){
				throw new Error('Request error');
			}
			console.log(response);
			response.json();
		})
		.then(data => {
			const ulElement = document.getElementById('repos');
			ulElement.innerHTML = '';
			data.forEach(r => {
				const liElement = document.createElement('li');
				liElement.textContent = r.full_name;
				ulElement.appendChild(liElement);
			});
		})
		.catch(error =>{
			console.log('Promise rejected');
			console.log(error);
		});

		console.log('After request');
}

