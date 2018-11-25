var overlay = document.getElementById('dropdown-overlay')

function checkRadioBtn() {
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
    overlay.style.opacity = '0'
}

function displayOverlay() {
    if (overlay.style.opacity === '0') {
        overlay.style.opacity = '1'
    } else {
        overlay.style.opacity = '0'
    }
}