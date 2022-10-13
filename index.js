const language = document.querySelector('.changeLanguage')
const languageIcon = language.children[0]

language.addEventListener("click", changeLanguage, false)
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname == '/portfolyo.html') {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.querySelectorAll('.movableBorder').forEach((item, index) => {
            if (index > 1 && index % 2 === 0) {
                randomColor = Math.floor(Math.random() * 16777215).toString(16);
            }
            item.style.backgroundColor = "#" + randomColor;
        })
    }
}, false);

function changeLanguage() {
    let languageName = languageIcon.attributes[1].textContent.split("/")
    languageName = languageName[languageName.length - 1]
    if (languageName == 'turkey.png') {
        languageIcon.src = './assets/images/united-kingdom.png'
    } else {
        languageIcon.src = './assets/images/turkey.png'
    }
}

function displayColumn() {
    document.querySelector('.displayRow').style.display = 'none'
    document.querySelector('.displayColumn').style.display = 'block'
}

function displayRow() {
    document.querySelector('.displayRow').style.display = 'block'
    document.querySelector('.displayColumn').style.display = 'none'
}

function changeForm(event) {
    let contactForm = document.querySelector('.formsContactForm')
    let projectForm = document.querySelector('.formsProjectForm')
    if (event.classList[0] === 'formsContactFormImage') {
        projectForm.style.display = 'none'
        contactForm.style.display = 'block'
    } else if (event.classList[0] === 'formsProjectFormImage') {
        projectForm.style.display = 'block'
        contactForm.style.display = 'none'
    }
}