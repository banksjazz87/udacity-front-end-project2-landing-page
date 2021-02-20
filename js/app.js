//function for the drop down menu


const menu = document.getElementById("hamburger-container");
const links = document.getElementById('nav-links');
const nav = document.getElementById('navbar');

let i = 0;

menu.addEventListener('click', () => {
    const downIncrement = setInterval(() => {
        if (i < 100 && links.style.display === 'flex') {
            i++;
            links.style.height = i + 'vh';
        } else {
            clearInterval(downIncrement);
        }
    }, 10);

    if (links.style.display === 'none') {
        links.style = "display: flex; height: 0vh;opacity: 1;";
        nav.style.opacity = '.9';
    } else {
        setTimeout(() => {
            links.style.display = 'none';
            nav.style.opacity = '1';
            i = 0;
        }, 200);
    }
});

//Function pertaining to what happens when Item is clicked in the dropdown menu

links.addEventListener('click', () => {
    links.style.display = 'none';
    i = 0;
});

//code pertaining to the scroll feature after clicking on a link

const bod = document.querySelector('body');

const test = document.getElementById('pro');

console.log(test.getBoundingClientRect);

/*bod.addEventListener('mousemove', (event) => {
    console.log(event.screenY);
    console.log(event.screenX);
});*/