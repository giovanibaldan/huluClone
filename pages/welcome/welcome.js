// ---------  SEÇÃO 5 --------- //

// Função para definir o primeiro canal (indíce 0) como inicial
window.addEventListener("load", () => {
    moveChannel(0)
})

// Função de mudança de opções de Canais
function moveChannel(option) {
    // Mover a barra abaixo da seleção
    const channelOptions = document.querySelectorAll(".channel-button");
    const channelBarProgress = document.querySelector(".channel-bar-progress")
    const channelSelected = channelOptions[option]

    const channelBarProgressWidth = channelSelected.offsetWidth;
    const channelBarProgressPosition = channelSelected.offsetLeft - 315; // 315px é o padding eixo-x da Seção 5

    channelBarProgress.style.width = `${channelBarProgressWidth}px`
    channelBarProgress.style.left = `${channelBarProgressPosition}px`

    // Alterar a cor da opção selecionada
    channelOptions.forEach((button, index) => {
        button.classList.toggle("selected", index === option);
    });

    // Alterar imagem de fundo do canal
    const channelBackground = document.querySelector(".channel-background")
    const backgroundImages = [
        "/assets/imgs/canal1.jfif",
        "/assets/imgs/canal2.jfif",
        "/assets/imgs/canal3.jfif"
    ]

    channelBackground.src = backgroundImages[option];

    // Alterar as informações do canal
    // Título
    const channelTittle = document.querySelector(".channel-tittle")
    const tittleOptions = [
        "Live Sports",
        "Breaking News",
        "Biggest Events"
    ]

    channelTittle.innerHTML = tittleOptions[option]

    // Descrição
    const channelDesc = document.querySelector(".channel-desc")
    const descOptions = [
        "Catch your games at home or on the go. Stream live games<br />from major college and pro leagues including the NCAA®, NBA,<br />NHL, NFL, and more.",
        "Keep pace with what's going on locally and globally with<br />trusted opinions from all the top news networks.",
        "Spectacular, can't-miss moments like the Olympics, Grammys®,<br />Oscars®, Emmys®, and more."
    ]
    channelDesc.innerHTML = descOptions[option]

    // Patrocinadores
    const sponsorsOptions = [
        ["/assets/imgs/CBS.png", "/assets/imgs/ESPN.png", "/assets/imgs/FS1.svg", "/assets/imgs/NFL.png", "/assets/imgs/MLB.webp"],
        ["/assets/imgs/ABCnews.png", "/assets/imgs/CNN.svg", "/assets/imgs/MSNBC.png", "/assets/imgs/FOXNews.svg"],
        ["/assets/imgs/yellowball.png", "/assets/imgs/GoldenAwards.png", "/assets/imgs/GrammyAwards.png", "/assets/imgs/Oscars.png"]
    ]

    const channelSponsorsList = document.querySelector(".channel-sponsors")
    channelSponsorsList.innerHTML = ""

    sponsorsOptions[option].forEach((sponsorSrc) => {
        // Criando a Div do patrocinador
        const sponsorDiv = document.createElement("div")
        sponsorDiv.classList.add("sponsor")

        // Criando a Imagem do patrocinador
        const sponsorImage = document.createElement("img")
        sponsorImage.src = sponsorSrc
        sponsorImage.alt = ""
        sponsorImage.classList.add("sponsor-image")

        // Adicionando a imagem dentro da Div do patrocinador
        sponsorDiv.appendChild(sponsorImage)

        // Adicionando esse conjunto dentro da lista de patrocinadores do canal
        channelSponsorsList.appendChild(sponsorDiv)
    })

    // Animação de surgimento dos elementos
    const channelAll = document.querySelectorAll('.channel-all > h2, .channel-all > h3, .channel-all > .channel-sponsors, .channel-all > h4');
    
    // Remove a classe de animação, se já estiver presente, para reiniciar a animação
    channelAll.forEach((element) => {
        element.classList.remove('channel-animation');
        void element.offsetWidth; // Reflow para reiniciar a animação
        element.classList.add('channel-animation');
    });

};

// ---------  SEÇÃO 5 --------- //