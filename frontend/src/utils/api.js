export async function callApi() {
    const response = await fetch("http://localhost:5000/");
    console.log(response);
    const text = await response.text();
    console.log(text);
    return text;
}

export async function makePost(message) {    
    const response = await fetch("http://localhost:5000/create", {        
        method: 'POST',        
        headers: {            
            'Content-Type': 'application/json'        
        },        
        body: JSON.stringify({"message": message})    
    });
}

export async function getGallery() {
    const response = await fetch("http://localhost:5000/gallery", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}