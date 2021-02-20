//function for the drop down menu


const menu = document.getElementById("hamburger-container");
const links = document.getElementById('nav-links');
const nav = document.getElementById('navbar');

let i = 0;

menu.addEventListener('click', () => {
    const increment = setInterval(() => {
        if (i < 100 && links.style.display === 'flex') {
            i++;
            links.style.height = i + 'vh';
        } else {
            clearInterval(increment);
        }
    }, 1);

    if (links.style.display === 'none') {
        links.style = "display: flex; height: 0vh";
    } else {
        links.style.display = 'none';
        i = 0;
    }
});