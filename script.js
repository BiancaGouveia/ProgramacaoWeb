const data = [
    {
        image: "https://picsum.photos/300/302",
        description: "eu sou uma imagem",
        images: [],
        owner: {
            name: "Fulano",
            address: "rua das araras",
            number: "11837465309"
        }
    },
    {
        image: "https://picsum.photos/300/302",
        description: "eu sou uma imagem"
    },
    {
        image: "https://picsum.photos/300/302",
        description: "eu sou uma imagem"
    },
    {
        image: "https://picsum.photos/300/302",
        description: "eu sou uma imagem"
    }
];

function loadPage() {
    const container = document.getElementById('cardContainer');
    
    // Limpa o container antes de adicionar novos cards
    container.innerHTML = '';
    
    // Itera sobre os dados e cria os cards
    data.forEach(item => {
        // Cria o elemento do card
        const card = document.createElement('div');
        card.className = 'card';
        
        // Cria e adiciona a imagem
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.description || 'Imagem do card';
        card.appendChild(img);
        
        // Cria e adiciona a descrição
        const description = document.createElement('p');
        description.textContent = item.description || 'Sem descrição';
        card.appendChild(description);
        
        // Se existir owner, mostra informações do dono
        if (item.owner) {
            const ownerInfo = document.createElement('p');
            ownerInfo.style.fontSize = '12px';
            ownerInfo.style.color = '#666';
            ownerInfo.innerHTML = `👤 ${item.owner.name}<br>📍 ${item.owner.address}, ${item.owner.number}`;
            card.appendChild(ownerInfo);
        }
        
        // Adiciona o card ao container
        container.appendChild(card);
    });
}

// Opcional: carregar os cards automaticamente quando a página abrir
// loadPage();