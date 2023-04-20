async function sendPostRequest(url, data){
    return await fetch(
        url, {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify(data)
        }
    )
    .then(response => response.json())
    .catch((error => {console.error(error)}))
}

sendPostRequest(
    'http://127.0.0.1:8000/auth/users/actiavation/',
    {
        uid:"NA",
        token: "bmnh5p-ce561adc6f9a18f3109cb87697324475"
    }
)