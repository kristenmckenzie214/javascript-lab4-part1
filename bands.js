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
   <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${band.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${band.genre}</li>
    <li class="list-group-item">${band.formedYear}</li>
    <li class="list-group-item">${band.active ? "Active" : "Inactive"}</li>
  </ul>
</div>`;
    container.innerHTML += bandCard;
  });
}

renderBands(bands);
