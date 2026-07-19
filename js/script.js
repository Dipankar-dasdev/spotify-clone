console.log("js loaded");

const cardsContainer = document.getElementById("music-cards");
const artistContainer = document.getElementById("artist-cards");
const trending = document.getElementById("trending-cards");
const recent = document.getElementById("recent-cards");

const playerCover = document.getElementById("player-cover");
const playerTitle = document.getElementById("song-title");
const playerArtist = document.getElementById("artist-name");

const playerToggleBtn = document.querySelector(".player-toggle-btn");
const playerIcon = playerToggleBtn.querySelector("i");

let isPlaying = false;


function renderCards(data, container, cardClass, isArtist = false) {
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add(cardClass);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-div");

    const details = document.createElement("div");
    details.classList.add("details");

    imgContainer.innerHTML = `
      <img src="${item.image}" alt="${isArtist ? item.name : item.title}">
      <button class="play-btn">
        <i class="bi bi-play-fill"></i>
      </button>
    `;

    if (isArtist) {
      details.innerHTML = `
        <h3 class="card-artist">${item.name}</h3>
        <h4 class="card-title">Artist</h4>
      `;
    } else {
      details.innerHTML = `
        <h3 class="card-title">${item.title}</h3>
        <p class="card-artist">${item.artist}</p>
      `;
    }

    const playBtn = imgContainer.querySelector(".play-btn");

    playBtn.addEventListener("click", () => {
      playerCover.src = item.image;

      if (isArtist) {
        playerTitle.textContent = "Now Playing";
        playerArtist.textContent = item.name;
      } else {
        playerTitle.textContent = item.title;
        playerArtist.textContent = item.artist;
      }

      isPlaying = true;
      playerIcon.className = "bi bi-pause-fill";
    });

    card.appendChild(imgContainer);
    card.appendChild(details);
    container.appendChild(card);
  }); 
}


renderCards(albums, cardsContainer, "album-card");
renderCards(artists, artistContainer, "artist-card", true);
renderCards(trendingSongs, trending, "trending-card");
renderCards(recentlyPlayed, recent, "recent-card");


const content = document.querySelector(".content");
const filter = document.querySelector(".filter");
const firstHeading = document.querySelector(".music-row-heading");

content.addEventListener("scroll", () => {
  const headingTop = firstHeading.getBoundingClientRect().top;
  const filterBottom = filter.getBoundingClientRect().bottom;

  filter.classList.remove("scrolling", "solid");

  if (content.scrollTop > 0) {
    filter.classList.add("scrolling");
  }

  if (headingTop <= filterBottom) {
    filter.classList.remove("scrolling");
    filter.classList.add("solid");
  }
});


playerToggleBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;

  playerIcon.className = isPlaying
    ? "bi bi-pause-fill"
    : "bi bi-play-circle-fill";
});
