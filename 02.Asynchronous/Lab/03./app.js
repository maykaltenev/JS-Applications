function loadCommits() {
   
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        //fetch return promise
        const response = await fetch(url);
        console.log(response);
        if (response.status == 404) {
            throw new Error(response.statusText);
        }
        // response return promise
        const data = await response.json();
        console.log('Promise fulfilled');
        console.log(data);

        const ulElement = document.getElementById('repos');
        ulElement.innerHTML = '';
        data.forEach(r => {
            const liElement = document.createElement('li');
            liElement.textContent = r.full_name;
            ulElement.appendChild(liElement);
        });

    } catch (error) {
        console.log('Promise rejected');
        console.log(error);
    }
    console.log('After request!');
}