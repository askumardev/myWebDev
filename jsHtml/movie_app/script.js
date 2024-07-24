//const APIURL = "https://api.themoviedb.org/3/person/51329/movie_credits?api_key=f1d314280284e94ff7d1feeed7d44fdf";
// const IMGPATH = ""

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.querySelector("main");
const form = document.querySelector("form");
getMovies();

async function getMovies() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();

  console.log(respData);
  respData.results.forEach((movie) => {
    const { backdrop_path, original_title, vote_average } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <img
        src="${IMGPATH + backdrop_path}"
        alt="${original_title}"
      />
      <div class="movie-info">
        <h3>${original_title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
    `;

    // img.src = IMGPATH + movie.backdrop_path;
    main.appendChild(movieEl);
  });
  //return respData;
}
function getClassByRate(rate) {
  if (rate >= 8) {
    return "grn";
  } else if (rate >= 5) {
    return "orng";
  } else {
    return "redd";
  }
}
