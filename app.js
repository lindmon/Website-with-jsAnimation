



// const button = document.querySelector('button');
// const header = document.querySelector('h1');

// button.addEventListener('click', () => {
//     fetch("https://api.adviceslip.com/advice")
// .then(result => result.json())
// .then(data => {
//     header.innerText = data.slip.advice;
// });
// });

fetch(“https://mockbin.com/request”)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });