"use strict";

const restaurants = [
  { name: "Chez Pierre", cuisine: "French", location: "Paris", rating: 4.8 },
  {
    name: "Mama's Pizza",
    cuisine: "Italian",
    location: "New York",
    rating: 4.5,
  },
  { name: "Tokyo Sushi", cuisine: "Japanese", location: "Tokyo", rating: 4.7 },
];

function renderRestaurants(restaurants) {
  const container = document.getElementById("restaurantsContainer");
  restaurants.forEach((restaurant) => {
    const card = `
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class+"card-title">${restaurant.name}</h5>
              <p class="card-text"><strong>Cuisine:</strong>${restaurant.cuisine}</p>
              <p class="card-text"><strong>Location:</strong>${restaurant.location}</p>
              <p class="card-text"><strong>Rating:</strong>${restaurant.rating}/5</p>
            </div>
          </div>
        </div>
              `;
    container.innerHTML += card;
  });
}

renderRestaurants(restaurants);
