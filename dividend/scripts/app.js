let isSignedIn = false;

const button = document.querySelector('#signup-button');

function handleClick(event) {
    event.preventDeault();
    console.log('button clicked!');
    console.log(button.disabled);
    button.innderHTML = 'sign out';

    button.addEventListener('click', handleClick);
}