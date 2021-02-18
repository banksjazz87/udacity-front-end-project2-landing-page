//function for the drop down menu

const menu = document.getElementById("hamburger-container");

const links = document.getElementById('nav-links');

const nav = document.getElementById('navbar');

menu.addEventListener('click', () => {
    if (links.style.display === 'none') {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
});