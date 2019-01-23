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

let backgroundData = backgrounds[Math.floor(Math.random() * backgrounds.length)]
document.getElementById('main').style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(' + path + backgroundData['url'] + ')'
document.getElementById('footer').innerHTML = '<p class="name"><a href="' + backgroundData['origin']['source'] + '" target="_blank">' + backgroundData['name'] + '</a></p><p class="by"><a href="' + backgroundData['license']['url'] + '" target="_blank">' + backgroundData['author'] + ' (' +backgroundData['license']['name'] + ')</a></p>'