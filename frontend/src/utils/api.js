export async function callApi() {
    const response = await fetch("http://localhost:5000/");
    console.log(response);
    const text = await response.text();
    return text;
}

export async function makePost(message) {
    
    const response = await fetch("http://localhost:5000/create", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({"message": message})
    });
}