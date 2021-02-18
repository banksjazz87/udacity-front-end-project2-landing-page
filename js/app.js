//function for the drop down menu


const menu = document.getElementById("hamburger-container");
const links = document.getElementById('nav-links');
const nav = document.getElementById('navbar');

let increment = null;
let stop = clearInterval(increment);
let i = 0;

menu.addEventListener('click', () => {
    if (links.style.display === 'none') {
        links.style.display = 'flex';
        increment = setInterval(() => {
            i++;
            console.log(i);
        }, 1000);

    } else {
        links.style.display = 'none';
        stop;
        i = 0;
    }
});