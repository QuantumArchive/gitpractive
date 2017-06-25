var animeDiv = document.getElementById('ANIMEWHAT')

function changeColor (event) {
  event.preventDefault()
  animeDiv.style.color = 'blue'
  animeDiv.style.fontSize = '40px'
}

animeDiv.addEventListener('click', changeColor, false)