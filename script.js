document.getElementById('fetchButton').addEventListener('click', function () {
  console.log('111111111111111111111');
  fetch('https://cors-anywhere.herokuapp.com/http://132.226.23.243:3300/image')
    .then((response) => {
      console.log('2222222222222', response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // 데이터가 JSON 형식이라고 가정
    })
    .then((data) => {
      // 응답 데이터를 HTML에 표시
      document.getElementById('result').innerHTML = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => {
      console.log('333333333333333333', error);
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
      document.getElementById('result').innerHTML =
        'Error fetching data: ' + error.message;
    });
});
