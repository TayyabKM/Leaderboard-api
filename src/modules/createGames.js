/* eslint-disable linebreak-style */
const createGame = async (url, name, score) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then((response) => response.json())
    .then((json) => json);
};

export default createGame;