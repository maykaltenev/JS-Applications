

function solution() {

	let listUrl = 'http://localhost:3030/jsonstore/advanced/articles/list/';
	let detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';
	let output = document.getElementById('main');

	fetch(listUrl)
		.then(data => data.json())
		.then(dataByIdTitle => {
			dataByIdTitle.forEach(id => {
				fetch(`${detailsUrl}${id._id}`)
					.then(text => text.json())
					.then(accordion => {
						let div = template(accordion);
						output.appendChild(div);
					})
					.catch(err => console.error(err));
			});
		})
		.catch(err => console.error(err));

	function template(accordion) {
		let pElement = document.createElement('p');
		pElement.textContent = accordion.content;

		let divExtraElement = document.createElement('div');
		divExtraElement.classList.add('extra');
		divExtraElement.appendChild(pElement);

		let span = document.createElement('span');
		span.textContent = accordion.title;

		let btn = document.createElement('button');
		btn.classList.add('button');
		btn.id = accordion._id;
		btn.textContent = 'More';
		btn.addEventListener('click', moreLess);

		let headDivElement = document.createElement('div');
		headDivElement.classList.add('head');
		headDivElement.appendChild(span);
		headDivElement.appendChild(btn);

		let accordionDivElement = document.createElement('div');
		accordionDivElement.classList.add('accordion');
		accordionDivElement.appendChild(headDivElement);
		accordionDivElement.appendChild(divExtraElement)

		return accordionDivElement;
	}

	function moreLess(e) {
		let toggleSwitch = e.currentTarget.parentElement.parentElement.children[1];
		if (e.currentTarget.textContent == 'More') {
			toggleSwitch.style.display = 'block';
			e.currentTarget.textContent = 'Less';
		} else {
			toggleSwitch.style.display = 'none';
			e.currentTarget.textContent = 'More';
		}
	}
}

solution()