function checkRadioBtn() {
    document.getElementById('dropdown-overlay').style.display = 'block'
    if (document.getElementById('google').checked) {
        document.getElementById('search-provider').action = 'https://www.google.com/search'
        document.getElementById('provider-reveal').innerHTML = '<div class="icon icon-google"></div>'
        document.getElementById('query').name = 'q'
    }
    else {
        document.getElementById('search-provider').action = 'https://search.naver.com/search.naver'
        document.getElementById('provider-reveal').innerHTML = '<div class="icon icon-naver"></div>'
        document.getElementById('query').name = 'query'
    }
}

function displayOverlay() {
    var overlay = document.getElementById('dropdown-overlay')
    if (overlay.style.display === 'none') {
        overlay.style.display = 'block'
    } else {
        overlay.style.display = 'none'
    }
}