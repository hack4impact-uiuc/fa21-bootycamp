export async function callApi() {
    const response = await fetch("http://localhost:5000/");
    console.log(response);
    const text = await response.text();
    return text;
}