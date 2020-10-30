export async function callApi() {
    const response = await fetch("http://localhost:5000/");
    console.log(response);
    const text = await response.json();
    return text;
}

export async function makePost(name, rideName, ticketPrice, minHeight, imageURL, publishedAuthor) {
    
    const response = await fetch("http://localhost:5000/create", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "rideName": rideName,
            "ticketPrice": ticketPrice,
            "minHeight": minHeight,
            "imageURL": imageURL,
            "publishedAuthor": publishedAuthor
        })
    });
}