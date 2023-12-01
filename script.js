import { songData } from "./data.js";

let currentMood = "happy";
let selectedGenres = "";

const moods = document.querySelector(".mood");
const genres = document.querySelector(".genres");
const playList = document.querySelector(".playlist");
const land = document.querySelector(".land");

land.addEventListener("click", () => {
  moods.innerHTML = `
  <div class="mood" data-aos="zoom-in">
  <h3>What is your current mood?</h3>
  <button id="happy" class="cards">
  <img src="cards/happy.png" >
  <p >Happy</p>
  </button>
  <button id="sad" class="cards">
  <img src="cards/sad.png">
  <p>Sad</p></button>
  <button id="chill" class="cards">
  <img src="cards/chill.png">
  <p>Chill</p>
  </button>
  <button id="energetic" class="cards">
  <img src="cards/energetic.png">
  <p>Energetic</p>
  </button>
  </div>
  `;

  land.style.display = "none";
});

moods.addEventListener("click", (e) => {
  currentMood = e.target.closest("button").id;

  genres.innerHTML = `
    <div id="genre" data-aos="zoom-out">
    <h3>What genre do you want to listen to?</h3>
    <button id='pop' data-index="0"class="cards">
    <img src="cards/pop.png" >
    <p>Pop</p>
    </button>
    <button id="rap" data-index="1"class="cards">
    <img src="cards/rap.png" >
    <p> Rap</p>
   
    </button>
    <button id="rock" data-index="2"class="cards">
   
    <img src="cards/rock.png">
    <p>Rock</p>
    </button> 
    <button id="country" data-index="3"class="cards">
    
    <img src="cards/country.png">
    <p>Country</p>
    </button>
    </div>
    `;
  moods.style.display = "none";
});
genres.addEventListener("click", (e) => {
  selectedGenres = e.target.closest("button").id;
  genres.style.display = "none";

  const selectedSongObject = songData[currentMood][selectedGenres];

  playList.innerHTML = `
  <div class="playlist" >
  
  ${selectedSongObject
    .map(
      (song) => `
  <div class="song-id"data-aos="zoom-out-down" data-aos-delay="500" data-aos-duration="1000">
  <img src="${song.image}">
  <h5>${song.title}</h5>
  </div>
  </div>
`
    )
    .join(" ")}
    <button class="back-btn" data-aos="zoom-in">New Playlist</button>

    
  `;
  const backBtn = document.querySelector(".back-btn");

  backBtn.addEventListener("click", () => {
    location.reload();
  });
});
