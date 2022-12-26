//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getFetch()
  }
});

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${choice}?key=6aec1f7a-0564-41f2-b81b-26e290c8294a`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data[0].shortdef[0])
        document.querySelector('h2').innerText = data[0].shortdef[0]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

