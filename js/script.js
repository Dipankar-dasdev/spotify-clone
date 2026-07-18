console.log("js loaded");
const cardsContainer = document.getElementById("music-cards");
const artistContainer = document.getElementById("artist-cards");
const trending = document.getElementById("trending-cards");
const recent = document.getElementById("recent-cards");

// for albums
albums.forEach((album) => {
  const card = document.createElement("div");
  card.classList.add("album-card");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-div");
  const details = document.createElement("div");
  details.classList.add("details");

  imgContainer.innerHTML = `<img src="${album.image}" alt="${album.title} cover" class="card-img"></img>
    <button class="play-btn">
        <i class="bi bi-play-fill"></i>
    </button>
`;

  details.innerHTML = `
        <h3 class="card-title">${album.title}</h3>
        <p class="card-artist">${album.artist}</p>
    `;
  card.appendChild(imgContainer);
  card.appendChild(details);
  cardsContainer.appendChild(card);
});

// for artists
artists.forEach((artist) => {
  const card = document.createElement("div");
  card.classList.add("artist-card");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-div");
  const details = document.createElement("div");
  details.classList.add("details");

  imgContainer.innerHTML = `<img src="${artist.image}" alt="${artist.title} cover" class="card-img"></img>
    <button class="play-btn">
        <i class="bi bi-play-fill"></i>
    </button>
`;

  details.innerHTML = `
        <h3 class="card-artist">${artist.name}</h3>
        <h4 class="card-title">Artist</h4>
    `;
  card.appendChild(imgContainer);
  card.appendChild(details);
  artistContainer.appendChild(card);
});

// for trending songs
trendingSongs.forEach((song) => {
  const card = document.createElement("div");
  card.classList.add("trending-card");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-div");
  const details = document.createElement("div");
  details.classList.add("details");

  imgContainer.innerHTML = `<img src="${song.image}" alt="${song.title} cover" class="card-img"></img>
    <button class="play-btn">
    <i class="bi bi-play-fill"></i>
    </button>
    `;

  details.innerHTML = `
        <h3 class="card-title">${song.title}</h3>
        <p class="card-artist">${song.artist}</p>
        `;
  card.appendChild(imgContainer);
  card.appendChild(details);
  trending.appendChild(card);
});

// for recently played
recentlyPlayed.forEach((recentlyPlayed) => {
  const card = document.createElement("div");
  card.classList.add("recent-card");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-div");
  const details = document.createElement("div");
  details.classList.add("details");

  imgContainer.innerHTML = `<img src="${recentlyPlayed.image}" alt="${recentlyPlayed.title} cover" class="card-img"></img>
        <button class="play-btn">
            <i class="bi bi-play-fill"></i>
        </button>
    `;

  details.innerHTML = `
            <h3 class="card-title">${recentlyPlayed.title}</h3>
            <p class="card-artist">${recentlyPlayed.artist}</p>
        `;
  card.appendChild(imgContainer);
  card.appendChild(details);
  recent.appendChild(card);
});
