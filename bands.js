"use strict";

const bands = [
  { name: "The Beatles", genre: "Rock", formedYear: 1960, active: false },
  {
    name: "Coldplay",
    genre: "Alternative Rock",
    formedYear: 1996,
    active: true,
  },
  { name: "Linkin Park", genre: "Nu Metal", formedYear: 1996, active: false },
  { name: "BTS", genre: "K-Pop", formedYear: 2013, active: true },
];
function renderBands(bands) {
  const container = document.getElementById("bandsContainer");

  bands.forEach((band) => {
    const bandCard = `
        <div>
        <h2>${band.name}</h2>
        <p><strong>Genre:</strong>${band.genre}</p>
        <p><strong>Formed Year: </strong>${band.formedYear}</p>
        <p><strong>Status: </strong>${band.active ? "Active" : "Inactive"}</p>
        <hr>
        </div>`;
    container.innerHTML += bandCard;
  });
}

renderBands(bands)
