async function getInfo() {

    let input = document.getElementById('stopId');
    let id = input.value;
    try {
        let ulElement = document.getElementById('buses');
        Array.from(ulElement.querySelectorAll('li')).forEach(li => li.remove());
        
        let response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${id}`);
        let data = await response.json();

        document.getElementById('stopName').textContent = data.name;

        Object.entries(data.buses).map(([bus, time]) => {
            let result = document.createElement('li');
            result.textContent = `Bus ${bus} arrives in ${time} minutes`;

            ulElement.appendChild(result);
        });
        input.value = '';
    } catch (error) {
        document.getElementById('stopName').textContent = 'Error';
    }
}