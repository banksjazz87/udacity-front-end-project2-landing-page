//function for the drop down menu


const menu = document.getElementById("hamburger-container");
const links = document.getElementById('nav-links');
const nav = document.getElementById('navbar');

let i = 0;
let increment = () => {
    i++
    console.log(i);
}

/*let stop = clearInterval(increment);
let start = setInterval(increment, 1000);



menu.addEventListener('click', () => {
    //let start = setInterval(increment, 100);

    if (links.style.display === 'none') {
        links.style.display = "flex";
        start;
    } else {
        links.style.display = 'none';
        //clearInterval(increment);
        i = 0;
        stop;
    }
});