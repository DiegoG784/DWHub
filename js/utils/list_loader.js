function fetchDatabase(filePath) {
    //carrega um arquivo que está guardado dentro do diretório do site, retornando um resultado assíncrono
    return fetch(filePath) 
    
    .then( //Esta função está sendo chamada em conjunto com o fetch(filePath), está separado desse jeito por questões de legibilidade
        response => {
            return response.json();
        }
    )
}
