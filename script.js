
const insert = document.getElementById('main')
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const tableBody = document.querySelector('#data-table tbody');
        data.forEach(item => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = item.userId;
            row.insertCell(1).textContent = item.id;
            row.insertCell(2).textContent = item.title;
            row.insertCell(3).textContent = item.body;
        });
    })