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
        navElement.textContent = arr[j];
        parent.appendChild(navElement);
    }
};

createListItems(listParent, listItems);

/**
 * @description this is an event listener, for a click event on the 'hamburger' dropdown menu
 * @returns the menu, unorder list, for the user to select from .
 */

const menu = document.getElementById("hamburger-container");
const nav = document.getElementById('navbar');

let i = 0;

menu.addEventListener('click', () => {
    clearInterval(scrollStopped);
    scrollCount = 0;
    newCount = 0;
    const downIncrement = setInterval(() => {
        if (i < 5 && listParent.style.display === 'flex') {
            i++;
            listParent.style.height = i + 'vh';
        } else {
            clearInterval(downIncrement);
        }
    }, 10);

    if (listParent.style.display === 'none') {
        listParent.style = "display: flex; height: 0vh;opacity: 1;";
        nav.style.opacity = '.9';
    } else {
        setTimeout(() => {
            listParent.style.display = 'none';
            nav.style.opacity = '1';
            i = 0;
        }, 200);
    }
});

/**
 * @description this code pertains to how the page is scrolled to the next section, after clicking a menu item.
 * @param {string} event
 * @returns a smooth scrolling feature to the link that was clicked.
 */

const smoothScroll = () => {
    for (j = 0; j < listParent.children.length; j++) {
        listParent.children[j].addEventListener('click', (event) => {
            let targetId = event.target.textContent.toLowerCase();
            let targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

smoothScroll();

/**
 * @description this is a function to determine if there is a current active state.
 * @param {string} previous class value of active state.
 *  @returns cancels out the previous active state, for the list item class.
 */

const removeActive = (previous) => {
    if (document.querySelector(previous)) {
        let prevActive = document.querySelector(previous);
        prevActive.removeAttribute('class');
    }
}

/**
 * @description this code creates an active state for the elements as they're clicked
 * @param {string} event
 * @returns an active-class value.
 */

const activeList = document.createAttribute("class");
activeList.value = "active-menu-item";

const activeState = (event) => {
    for (j = 0; j < listParent.children.length; j++) {
        listParent.children[j].addEventListener("click", (event) => {
            removeActive(".active-menu-item");
            event.target.setAttributeNode(activeList);
        });
    }
}

activeState();

/**
 * @description Adds an active state to an element, whether the user is hovering over it.
 * @returns a hovered state, highlighted outer border.
 */

const trumpetDiv = document.getElementsByClassName('trumpet-container');
const cards = document.getElementsByClassName("trumpets");

for (let int = 0; int < cards.length; int++) {
    let card = cards[int];
    card.addEventListener('mouseover', () => {
        let cardAtt = document.createAttribute('id');
        cardAtt.value = 'active-state';
        card.setAttributeNode(cardAtt);
    });
    card.addEventListener('mouseout', () => {
        if (card.id === "active-state") {
            card.id = card.id.replace('active-state', '');
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

/**
 * @description this will determine what the active state should be, based on the user's current location on the page, and also creates a delay between renderings to factor in the scrollIntoView() event.
 * @returns updated active state.
 */

const sections = document.querySelectorAll('section');
const winHeight = window.innerHeight;
let delay;
const activeSection = document.createAttribute('class');
activeSection.value = "active-section";

window.addEventListener('scroll', () => {
    clearInterval(delay);
    delay = setInterval(() => {
        removeActive(".active-menu-item");
        removeActive(".active-section");
        for (var j = 0; j < sections.length; j++) {
            let top = sections[j].getBoundingClientRect().top;
            let bottom = sections[j].getBoundingClientRect().bottom;

            if (top <= winHeight / 4 && bottom > winHeight / 4) {
                listParent.children[j].setAttributeNode(activeList);
                sections[j].setAttributeNode(activeSection);
            }
        }
    }, 100);
});