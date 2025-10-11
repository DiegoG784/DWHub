function fetchDatabase(filePath) {
    return fetch(filePath)
    
    .then(
        response => {
            return response.json();
        }
    )
}
