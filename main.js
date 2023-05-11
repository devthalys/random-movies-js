import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const changeMovie = document.querySelector("#change-movie");
changeMovie.addEventListener("click", getMovie);

function getMovie() {
  const id = Math.floor(Math.random() * 1000) + 1;

  // https://api.themoviedb.org/3/movie/444?api_key=399681cd4e2ca9464a1c616336559ad8&language=pt-BR
  const url = `${BASE_URL}${id}?${API_KEY}&${language}`;

  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log(data, "<data>");
      const film = document.querySelector("#film");

      film.innerHTML = `
      <div>
      <img class='banner-movie' src="${IMG_URL + data.poster_path}"/>
      <h2 class='title-movie'>${data.title}</h2>
      </div>
    `;
    })
    .catch((error) => {
      const film = document.querySelector("#film");
      film.innerHTML = `
      <div id='error'>
      <h2>erro ao carregar filme :(</h2>
      </div>
      `;
    });
}
