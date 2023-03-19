const url = 'https://api.github.com/users/wilhamoreira/repos';
let boxes = document.querySelectorAll('div.meu-onixs')
fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Não foi possível acessar a API do GitHub');
  })
  .then(data => {
    console.log(boxes);
    data.map(repo => {
         boxes.innerHTML = ´<h1>teste</h1>´;
    });
  })
  .catch(error => {
    console.error(error);
  });