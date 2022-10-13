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

function changeFormImageBackgroundColor(formClassName) {
    let forms = document.querySelectorAll('.formImages')
    forms.forEach(item => {
        if (item.classList[0] === formClassName) {
            item.childNodes.forEach(child => {
                if (child.className) {
                    if (child.className.includes('changeBackground')) {
                        console.log(child)
                        child.style.backgroundColor = 'rgb(231, 188, 182)'
                    }
                }
            })
        } else {
            item.childNodes.forEach(child => {
                if (child.className) {
                    if (child.className.includes('changeBackground')) {
                        console.log(child)
                        child.style.backgroundColor = 'rgb(182, 208, 231)'
                    }
                }
            })
        }
    })
    // console.log(formClassName)
    // console.log(forms)
}

function changeForm(event) {
    let contactForm = document.querySelectorAll('.forms')
    contactForm.forEach(item => {
        // console.log(item)
        if (event.classList[0].includes(item.classList[0])) {
            // console.log(item)
            item.style.display = 'block'
            changeFormImageBackgroundColor(event.classList[0])
        } else {
            item.style.display = 'none'
        }
    })
}