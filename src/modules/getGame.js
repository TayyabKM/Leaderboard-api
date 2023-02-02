/* eslint-disable linebreak-style */
const getScores = async (url) => fetch(url, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => response.json())
  .then((response) => response.result);

export default getScores;