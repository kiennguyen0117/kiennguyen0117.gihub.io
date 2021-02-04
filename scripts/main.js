let myImage = document.getElementById('logo');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');

    if (mySrc === 'image/firefox_logo_1.webp') {
        mySrc = 'image/firefox_logo_2.png';

    } else {
        mySrc = 'image/firefox_logo_1.webp';
    }

    myImage.setAttribute('src', mySrc)
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myImage);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }

}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = () => setUserName();