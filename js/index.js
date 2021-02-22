document.querySelector('.timestamp').innerText = new Date().toLocaleDateString();

document.querySelector('.fetch-html').addEventListener('click',fetchHtml);

async function fetchHtml() {
    const response = await fetch('client-data.html');
    const htmlData = await response.text();
    document.querySelector('.html-container').innerHTML = htmlData;
}

document.querySelector('.fetch-json').addEventListener('click',fetchJson);
async function fetchJson() {
    const response = await fetch('client-data.json');
    const clientData = await response.json();
    document.querySelector('.client-name').innerText = clientData.name;
    document.querySelector('.account-balance').innerText = clientData.balance;
}