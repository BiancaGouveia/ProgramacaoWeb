async function buscarDados() {
  try {
    const resposta = await fetch('https://petadopt.onrender.com/pet/pets');
    
    // Verifica se a requisição foi bem-sucedida
    if (!resposta.ok) {
      throw new Error('Erro ao buscar dados: ' + resposta.status);
    }
    
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
  }
}

buscarDados();


const data = [
    {
    image: "http://picsum.photos/300/300",
    description: "Eu sou uma imagem",
    titulo: "Sou1"
    },
    {
    image: "http://picsum.photos/301/301",
    description: "Sou uma imagem",
    titulo: "Sou2"
    },
    {
    image: "http://picsum.photos/302/302",
    description: "Sou uma imagem",
    titulo: "Sou3"
    },
    {
    image: "http://picsum.photos/303/303",
    description: "Sou uma imagem",
    titulo: "Sou4"
    }  
]

const container = document.getElementById("cardsContainer");

data.forEach(element =>{
    console.log(element)
})

function loadPage(){
    const cardHTML = data.map(card => `
    <div class="card">
        <div><img src=${card.image} alt="imagem randomica"></div>
        <p>Sou uma imagem</p>
        <button class="btn-more" data-titulo=${card.titulo}>Mais</button>
    </div>
    
`).join("")

container.innerHTML = cardHTML;

container.addEventListener('click', (event)=>{

    console.log("Clique no card")
    if(event.target.classList.contains("btn-more")){
        console.log(event.target.dataset.titulo)
    }
})
}

