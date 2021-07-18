const form1 = document.querySelector('[class=promotion-form]');
const form2 = document.querySelector('[class=promotion-form2]');

form1.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data = {
        name,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    window.location.replace('/src/pages/subscribed.html');
});

form2.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data = {
        name,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    window.location.replace('/src/pages/subscribed.html');
})