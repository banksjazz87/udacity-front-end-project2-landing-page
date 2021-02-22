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
    nav.style.opacity = '1';
    i = 0;
});

//code pertaining to the scroll feature after clicking on a link

const anchors = document.querySelectorAll('.link-anchor');

document.addEventListener('click', (event) => {
    if (event.target.className === "link-anchor") {
        let idName = (event.target.getAttribute('data-link'));
        let newSection = document.getElementById(idName);
        newSection.scrollIntoView({ behavior: 'smooth' });
    }
});

//code pertaining to adding an active state
const trumpetDiv = document.getElementsByClassName('trumpet-container');
const cards = document.getElementsByClassName("trumpets");


for (let int = 0; int < cards.length; int++) {
    let card = cards[int];
    cards[int].addEventListener('mouseover', () => {
        let cardAtt = document.createAttribute('id');
        cardAtt.value = 'active-state';
        card.setAttributeNode(cardAtt);
    });
    cards[int].addEventListener('click', () => {
        let cardAtt = document.createAttribute('id');
        cardAtt.value = "selected-state";
        card.setAttributeNode(cardAtt);
        console.log(card);
    })
    cards[int].addEventListener('mouseout', () => {
        if (card.id === "active-state") {
            card.id = card.id.replace('active-state', '');
        } else if (card.id === "selected-state") {
            card.id = "selected-state";
        }
    })
}



/*cards.addEventListener('onclick', (event) => {
    let currentClass = event.target.getAttribute('class');
    console.log(currentClass);
})*/