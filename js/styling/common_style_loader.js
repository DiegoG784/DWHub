//Uma espécie de framework no estilo Bootstrap que fiz especificamente para este portfólio devido ao design do mesmo.

function loadCommonStyler() {
    //Todos os arquivos listados a baixo se encontram na pasta que foi definida na variável seguinte
    let commonStyleFiles = [
        'flex.css',
        'margin.css',
        'padding.css',
        'sizing.css',
        'styling.css'
    ];
    let commonStyleFolder = 'styles/commons/';


    commonStyleFiles.forEach(file => {
        //Cria um elemento <link> com o arquivo acima atribuido e inserido dentro do head do site
        let linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';

        //Devido ao Github não hospedar um site com o repositório atual no diretório raiz,
        //  eu fiz uma condição que checa se a URL do site atual está hospedada em um localhost ou dentro do github, 
        //  assim alterando para seu devido diretório
        if (!/127.0.0.1/.test(document.URL)) {
            linkElement.href = `/DWHub/${commonStyleFolder}${file}`;
        } else {
            linkElement.href = `/${commonStyleFolder}${file}`;
        }
        document.head.appendChild(linkElement);
    });
}

loadCommonStyler();