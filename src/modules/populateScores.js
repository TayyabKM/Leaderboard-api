const populateScores = (listData) => {
  const listObj = document.querySelector('.table-form');

  listData.forEach((score) => {
    const listRow = document.createElement('tr');
    listRow.className = 'score-list-row';

    const listItem = document.createElement('th');
    listItem.className = 'score-list-item';
    listItem.innerHTML = `${score.user} : ${score.score}`;

    listObj.appendChild(listRow);
    listRow.appendChild(listItem);
  });
};

export default populateScores;