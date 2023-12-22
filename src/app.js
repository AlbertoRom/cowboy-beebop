import a11yChecker from 'a11y-checker';

a11yChecker();

function loadCharacterPage(character){
    current_page = window.location.href
    character_page = character
    window.location.href = current_page.replace('reparto.html', character_page)
}