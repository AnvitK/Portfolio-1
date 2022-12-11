const sideMenu = document.querySelector('#sidemenu');

const openMenu = () => sideMenu.style.right = "0";
const closeMenu = () => sideMenu.style.right = "-160px";

const xMark = document.querySelector('#xmark');
const bars = document.querySelector('#bars');

xMark.addEventListener('click', closeMenu);
bars.addEventListener('click', openMenu);


const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

const openTab = (tabname) => {
    for (tabLink of tabLinks) tabLink.classList.remove("active-link");
    for (tabContent of tabContents) tabContent.classList.remove("active-tab");

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzRT4JeRUMwPD-kMRJOf-zavixzpJXSfAF1NbVWJZ9Yuq4jch95lu-eXXJ78jyD1cv9jw/exec';
const form = document.forms['submit-to-google-sheet'];
const successMsg = document.querySelector('#success-msg');

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // console.log('Success!', response);
        successMsg.innerHTML = "Message Sent Successfully";
        setTimeout(() => successMsg.innerHTML = "", 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});