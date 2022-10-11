const language = document.querySelector('.changeLanguage')
const languageIcon = language.children[0]
language.addEventListener("click", changeLanguage, false)
function changeLanguage() {
    languageName = languageIcon.attributes[1].textContent.split("/")
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