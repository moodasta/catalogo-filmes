function carregarFilmes() {
  //Fetch() localiza o arquivo
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR-US&page=1"
  )
    //Recebe a resposta e indica que a estrutura está em JSON
    .then((response) => response.json())

    //Armazena todas as informações na variável dados
    .then((dados) => {
      console.log(dados.results);

      var saida = "<div id=filme>";
      dados.results
        .map((item, i) => {
          saida += `

                <div>
                    <img src=https://image.tmdb.org/t/p/w500${item.poster_path}>
                    <p>${item.vote_average}</p>
                    <h2>${item.title}</h2>
                    <p>${item.release_date}</p>
                </div>
            `;
          saida += "</div>";
          document.body.innerHTML += saida;
        })
        .catch((erro) =>
          console.log(`Erro ao tentar executar a API -> ${erro}`)
        );
    });
}
