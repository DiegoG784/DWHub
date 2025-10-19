var onGithubPages = true //Alters the href on the elements to the GitHub Pages one, since the code repositories are not stored in the root page, but in their own folders.

function loadCommonStyler() {
    let commonStyleFiles = [
        'flex.css',
        'margin.css',
        'padding.css',
        'sizing.css',
        'styling.css'
    ];
    let commonStyleFolder = 'styles/commons/';


    commonStyleFiles.forEach(file => {
        // console.log(document.URL);
        let linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        if (onGithubPages) {
            linkElement.href = `/DWHub/${commonStyleFolder}${file}`;
        } else {
            linkElement.href = `/${commonStyleFolder}${file}`;
        }
        document.head.appendChild(linkElement);
    });
}

loadCommonStyler();