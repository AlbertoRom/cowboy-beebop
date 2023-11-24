function loadCharacterPage(character){
    current_page = window.location.href
    character_page = character + '.html'
    window.location.href = current_page.replace('reparto.html', character_page)
}