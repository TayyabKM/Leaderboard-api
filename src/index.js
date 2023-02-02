/* eslint-disable import/no-unresolved */
// eslint-disable-next-line
import _ from 'lodash';
import populateScores from './modules/populateScores.js';
import getScores from './modules/getGame.js';
import createGame from './modules/createGame.js';
import './style.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/01GG9XGZQRETNCSAJ7WBWF554R/scores';

const refreshButton = document.querySelector('.button-1');
const submitButton = document.querySelector('.add-button');

refreshButton.addEventListener('click', async () => {
  const tableList = await getScores(url);

  populateScores(tableList);
});

submitButton.addEventListener('click', async () => {
  const nameInput = document.querySelector('.name');
  const scoreInput = document.querySelector('.score');
  if (nameInput.value !== '' && scoreInput.value !== '') {
    createGame(url, nameInput.value, scoreInput.value);
    nameInput.value = '';
    scoreInput.value = '';
  }
});