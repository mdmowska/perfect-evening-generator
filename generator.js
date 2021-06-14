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
import { happyMusic, sadMusic, nostalgicMusic, spookyMusic } from './music.js';
import { happyBooks, sadBooks, nostalgicBooks, spookyBooks } from './books.js';

import { closeModal } from './script.js';

const modalTemplate = document.getElementsByTagName('template')[0];
const selectionElement = document.querySelector('[data-selection-list]');
const bookBtn = document.querySelector('[data-book-btn');
const moovieBtn = document.querySelector('[data-movie-btn');
export const generateBtn = document.querySelector('[data-generate-btn]');

let elementOne;
let elementTwo;
let elementThree;
let eveningIdea;
let elementOneHeader;
let elementTwoHeader;
let elementThreeHeader;

function generateItem(arr) {
  let ARRAY_SIZE = arr.length;
  let item;
  return (item = arr[Math.floor(Math.random() * ARRAY_SIZE)]);
}

export function getAllElements(eveningIdea, mood) {
  switch (eveningIdea) {
    case 'movieEvening':
      elementOneHeader = 'Movie';
      elementTwoHeader = 'Food';
      elementThreeHeader = 'Beverage';

      switch (mood) {
        case 'Happy':
          elementOne = generateItem(happyMovies);
          elementTwo = generateItem(happyFood);
          elementThree = generateItem(happyBeverages);
          break;
        case 'Sad':
          elementOne = generateItem(sadMovies);
          elementTwo = generateItem(sadFood);
          elementThree = generateItem(sadBeverages);
          break;
        case 'Nostalgic':
          elementOne = generateItem(nostalgicMovies);
          elementTwo = generateItem(nostalgicFood);
          elementThree = generateItem(nostalgicBeverages);
          break;
        case 'Spooky':
          elementOne = generateItem(spookyMovies);
          elementTwo = generateItem(spookyFood);
          elementThree = generateItem(spookyBeverages);
          break;
      }
      break;
    case 'bookEvening':
      elementOneHeader = 'Book';
      elementTwoHeader = 'Music';
      elementThreeHeader = 'Beverage';

      switch (mood) {
        case 'Happy':
          elementOne = generateItem(happyBooks);
          elementTwo = generateItem(happyMusic);
          elementThree = generateItem(happyBeverages);
          break;
        case 'Sad':
          elementOne = generateItem(sadBooks);
          elementTwo = generateItem(sadMusic);
          elementThree = generateItem(sadBeverages);
          break;
        case 'Nostalgic':
          elementOne = generateItem(nostalgicBooks);
          elementTwo = generateItem(nostalgicMusic);
          elementThree = generateItem(nostalgicBeverages);
          break;
        case 'Spooky':
          elementOne = generateItem(spookyBooks);
          elementTwo = generateItem(spookyMusic);
          elementThree = generateItem(spookyBeverages);
          break;
      }
  }
}

bookBtn.addEventListener('click', () => {
  eveningIdea = 'bookEvening';
});

moovieBtn.addEventListener('click', () => {
  eveningIdea = 'movieEvening';
});

export function renderModal() {
  let mood = selectionElement.options[selectionElement.selectedIndex].value;
  // console.log(eveningIdea, mood);

  if (eveningIdea === null || mood === '') {
    alert('Please choose your mood and book or movie button.');
    return;
  }
  getAllElements(eveningIdea, mood);

  let modalElement = modalTemplate.content.cloneNode(true);
  let closeModalButton = modalElement.querySelector('[data-close-button]');
  const elementOneName = modalElement.querySelector('[data-el1-title]');
  const elementOneImg = modalElement.querySelector('[data-el1-image]');
  const elementTwoName = modalElement.querySelector('[data-el2-name]');
  const elementTwoImg = modalElement.querySelector('[data-el2-image]');
  const elementThreeName = modalElement.querySelector('[data-el3-name]');
  const elementThreeImg = modalElement.querySelector('[data-el3-image]');

  const el1Header = modalElement.querySelector('[data-el1-header]');
  const el2Header = modalElement.querySelector('[data-el2-header]');
  const el3Header = modalElement.querySelector('[data-el3-header]');

  elementOneName.innerText = elementOne.name;
  elementOneImg.src = elementOne.image;

  elementTwoName.innerText = elementTwo.name;
  elementTwoImg.src = elementTwo.image;

  elementThreeName.innerText = elementThree.name;
  elementThreeImg.src = elementThree.image;

  el1Header.innerText = elementOneHeader;
  el2Header.innerText = elementTwoHeader;
  el3Header.innerText = elementThreeHeader;

  closeModalButton.addEventListener('click', () => {
    const modal = closeModalButton.closest('.modal');
    closeModal(modal);
    document.body.removeChild(modal);
  });

  document.body.appendChild(modalElement);
  eveningIdea = null;
}
