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

        if (!/127.0.0.1/.test(document.URL)) {
            linkElement.href = `/DWHub/${commonStyleFolder}${file}`;
        } else {
            linkElement.href = `/${commonStyleFolder}${file}`;
        }
        document.head.appendChild(linkElement);
    });
}

loadCommonStyler();