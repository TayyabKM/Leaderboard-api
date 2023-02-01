const htmlInput = (arr) => {
  arr.forEach((data) => {
    document.querySelector('.table-form').innerHTML += `
        <tr>
            <td>${data.name}: ${data.score}</td>
        </tr>
      `;
  });
};

export default htmlInput;