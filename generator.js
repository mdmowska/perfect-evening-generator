import {
  happyMovies,
  sadMovies,
  nostalgicMovies,
  spookyMovies,
} from './movies.js';
import {
  happyBeverages,
  sadBeverages,
  nostalgicBeverages,
  spookyBeverages,
} from './beverages.js';
import { happyFood, sadFood, nostalgicFood, spookyFood } from './food.js';

import { closeModal } from './script.js';

const modalTemplate = document.getElementsByTagName('template')[0];
const bookOrMovieContainer = document.querySelector('[data-bookmovie-container]');
const selectionElement = document.querySelector('[data-selection-list]');
export const generateBtn = document.querySelector('[data-generate-btn]');

let movie;
let food;
let beverage;

function generateItem(arr) {
  let ARRAY_SIZE = arr.length;
  let item;
  return (item = arr[Math.floor(Math.random() * ARRAY_SIZE)]);
}

export function getAllElements(mood) {

  switch (mood) {
    case 'Happy':
      movie = generateItem(happyMovies);
      food = generateItem(happyFood);
      beverage = generateItem(happyBeverages);
      break;
    case 'Sad':
      movie = generateItem(sadMovies);
      food = generateItem(sadFood);
      beverage = generateItem(sadBeverages);
      break;
    case 'Nostalgic':
      movie = generateItem(nostalgicMovies);
      food = generateItem(nostalgicFood);
      beverage = generateItem(nostalgicBeverages);
      break;
    case 'Spooky':
      movie = generateItem(spookyMovies);
      food = generateItem(spookyFood);
      beverage = generateItem(spookyBeverages);
      break;
  }
}

export function renderModal() {
  let mood = selectionElement.options[selectionElement.selectedIndex].value;
  getAllElements(mood);
  
  let modalElement = modalTemplate.content.cloneNode(true);
  let closeModalButton = modalElement.querySelector('[data-close-button]');
  const movieTitle = modalElement.querySelector('[data-movie-title]');
  const movieImg = modalElement.querySelector('[data-movie-image]');
  const beverageName = modalElement.querySelector('[data-beverage-name]');
  const beverageImg = modalElement.querySelector('[data-beverage-image]');
  const foodName = modalElement.querySelector('[data-food-name]');
  const foodImg = modalElement.querySelector('[data-food-image]');

  movieTitle.innerText = movie.title;
  movieImg.src = movie.image;

  beverageName.innerText = beverage.name;
  beverageImg.src = beverage.image;

  foodName.innerText = food.name;
  foodImg.src = food.image;

  closeModalButton.addEventListener('click', () => {
    const modal = closeModalButton.closest('.modal');
    closeModal(modal);
    document.body.removeChild(modal);
  });

  document.body.appendChild(modalElement);
}
