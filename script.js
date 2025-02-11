// npx json-server --watch api-artists/artists.json --port 3000

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlists');

//funcao para consumir a api, usar o paramento que foi o que digitamos
function requestApi(searchTerm){
    const url = `http://localhost:3000/artists/?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((results) => displayResults(results));
}

function displayResults(results) {
    playlistContainer.classList.add("hidden");
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");
  
    results.forEach((element) => {
      artistImage.src = element.urlImg;
      artistName.innerText = element.name;
    });

    resultArtist.classList.remove("hidden");
}
  

document.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
      resultArtist.classList.add("hidden");
      playlistContainer.classList.remove("hidden");
      return;
    }
    requestApi(searchTerm);
});