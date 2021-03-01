/**
 * @description this is code pertaining to the menu list items being created dynamically.
 * @param {string, array} you will need to supply the parent element ID along with an array of strings that you would like to be made into list items and anchor tags.
 * @returns list and anchor elements for the menu.
 */

const listParent = document.getElementById('nav-links');
const listItems = ["Beginner", "Intermediate", "Professional", "Artist"];

const createListItems = (parent, arr) => {
    for (var j = 0; j < arr.length; j++) {
        let navElement = document.createElement('li');
        let navLink = document.createElement('a');
        navLink.textContent = arr[j];
        navElement.appendChild(navLink);
        parent.appendChild(navElement);
    }
};

createListItems(listParent, listItems);

/**
 * @description this function will create a class for the list items.
 * @returns class attributes and values for the list item.
 */

const listClass = () => {
    let listItem = listParent.children;
    for (var j = 0; j < listItem.length; j++) {
        let listClass = document.createAttribute('class');
        listClass.value = 'menu-item';
        let linkClass = document.createAttribute('class');
        linkClass.value = "link";
        listItem[j].setAttributeNode(listClass);
    }
}

listClass();

/**
 * @description this function will create a class and href attribute and value for the anchor tags in the menu.
 * @returns class and href values and attributes for the anchor tags in the menu.
 */

const menuListItems = document.getElementsByClassName('menu-item');

const anchorClass = () => {
    for (j = 0; j < menuListItems.length; j++) {
        let anchorItem = menuListItems[j].children;
        let anchorClass = document.createAttribute('class');
        let anchorHref = document.createAttribute('href');
        anchorClass.value = 'link';
        anchorHref.value = "#" + menuListItems[j].textContent.toLowerCase();
        anchorItem[0].setAttributeNode(anchorClass);
        anchorItem[0].setAttributeNode(anchorHref);
    }
}

anchorClass();

/**
 * @description this is an event listener, for a click event on the 'hamburger' dropdown menu
 * @returns the menu, unorder list, for the user to select from .
 */

const menu = document.getElementById("hamburger-container");
const links = document.getElementById('nav-links');
const nav = document.getElementById('navbar');

let i = 0;

menu.addEventListener('click', () => {
    clearInterval(scrollStopped);
    scrollCount = 0;
    newCount = 0;
    const downIncrement = setInterval(() => {
        if (i < 30 && links.style.display === 'flex') {
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

/**
 * @description Function pertaining to what happens when Item is clicked in the dropdown menu. 
 * @returns the style for the dropdown menu, to 'none' and the opacity for the navbar changes back to 1.
 */


links.addEventListener('click', () => {
    links.style.display = 'none';
    nav.style.opacity = '1';
    i = 0;
});

/**
 * @description this code pertains to how the page is scrolled to the next section, after clicking a menu item.
 * @param {string} event
 * @returns a smooth scrolling feature to the link that was clicked.
 */

const anchors = document.querySelectorAll('.link-anchor');

document.addEventListener('click', (event) => {
    if (event.target.className === "link-anchor") {
        let idName = (event.target.getAttribute('data-link'));
        let newSection = document.getElementById(idName);
        newSection.scrollIntoView({ behavior: 'smooth' });
    }
});

/**
 * @description Adds an active state to an element, whether the user is hovering over it or has selected it.
 * @returns a hovered state, highlighted outer border, and a selected state, which darkens the background of the selected element.
 */

const trumpetDiv = document.getElementsByClassName('trumpet-container');
const cards = document.getElementsByClassName("trumpets");

for (let int = 0; int < cards.length; int++) {
    let card = cards[int];
    card.addEventListener('mouseover', () => {
        if (card.id === 'selected-state') {
            card.id === 'selected-state';
        } else {
            let cardAtt = document.createAttribute('id');
            cardAtt.value = 'active-state';
            card.setAttributeNode(cardAtt);
        }
    });
    card.addEventListener('click', () => {
        let previous = document.getElementById("selected-state");
        if (previous) {
            previous.id = previous.id.replace("selected-state", (""));
            let cardAtt = document.createAttribute('id');
            cardAtt.value = "selected-state";
            card.setAttributeNode(cardAtt);
        } else {
            let cardAtt = document.createAttribute('id');
            cardAtt.value = "selected-state";
            card.setAttributeNode(cardAtt);
        }
    })
    card.addEventListener('mouseout', () => {
        if (card.id === "active-state") {
            card.id = card.id.replace('active-state', '');
        } else if (card.id === "selected-state") {
            card.id = "selected-state";
        }
    })
}

/**
 * @description Code for hiding the fixed navigation bar, after the user has stopped scrolling for two seconds.
 * @param event
 * @returns the navigation bar disappearing after two seconds of inactivity.
 */


let scrollCount = 0;
let newCount = 0;
let scrollStopped;

document.addEventListener("scroll", (event) => {
    scrollCount++;
    nav.style.display = 'flex';
    clearInterval(scrollStopped);
    scrollStopped = setInterval(() => {
        if (scrollCount === newCount && scrollCount > 0) {
            nav.style.display = 'none';
        } else {
            newCount = scrollCount;
        }
    }, 2000);
});

/**
 * @description clears the setInterval function, from the scrolling event,  when the user moves the mouse and then re-establishes the interval used in the scroll event.
 * @returns a clearInterval function, that then returns the interval that has been cleared, once there has been 2 seconds of in-activity.
 */

document.body.addEventListener('mousemove', () => {
    clearInterval(scrollStopped);
    scrollCount++;
    nav.style.display = "flex";
    scrollStopped = setInterval(() => {
        if (scrollCount === newCount && scrollCount > 0) {
            nav.style.display = 'none';
        } else {
            newCount = scrollCount;
        }
    }, 2000);
});