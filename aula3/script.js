const apiUrl = 'https://petadopt.onrender.com/pet/pets';

const container = document.getElementById('cardsContainer');
const btnCarregar = document.getElementById('btnCarregar');

btnCarregar.addEventListener('click', async () => {
  container.innerHTML = '<p class="mensagem">Buscando pets na API...</p>';

  try {
    const resposta = await fetch(apiUrl);
    const data = await resposta.json();
    const pets = data.pets;

    const cardsHTML = pets.map((pet) => `
      <div class="card">
        <img src="${pet.images[0]}" alt="${pet.name}">
        <div class="card-content">
          <h2>${pet.name}</h2>
          <p>Cor: ${pet.color}</p>
          <button class="btn-comprar" data-titulo="${pet.name}">
            Adotar
          </button>
        </div>
      </div>
    `).join('');

    container.innerHTML = cardsHTML;
  } catch (erro) {
    console.error(erro);
    container.innerHTML = '<p class="mensagem">Erro ao buscar dados na API.</p>';
  }
});

container.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-comprar')) {
    const titulo = event.target.dataset.titulo;
    alert(`Você clicou em ${titulo}`);
  }
});